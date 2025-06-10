import Usuario from '../models/user.model.js';
import  bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { token } from 'morgan';
import { createAccessToken } from '../libs/jwt.js';
import { TOKEN_SECRET } from '../config.js';

export const register = async (req, res) => {
  const { email, password, usuario, nombre, tipo_user } = req.body;

  try {

   const userFound =  await Usuario.findOne( {where: {email}})

  if(userFound) return res.status(400).json(["El email ya esta en uso"]);




	const  passwordHash = await bcrypt.hash(password ,10)
    const newUser = await Usuario.create({
      usuario,
      email,
      password : passwordHash,
      nombre,
      tipo_user
    });

       await fetch("http://10.144.41.14:90/users/1/web_requests/9/registro-usuario", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: newUser.nombre,
      tipo_usuario: newUser.tipo_user,
      email: newUser.email,
      fechaRegistro: new Date().toISOString()
    })
  });
/*	const token = await createAccessToken({id:newUser.id});
	res.cookie('token',token)
    res.json({
		id:newUser.id_usuario,
		usuario:newUser.usuario,
		email: newUser.email
	})*/
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en registro', error: error.message });
  }
};

export const login = async (req, res) => {
  const {password, usuario , email} = req.body;

  try {
  const userFound =  await Usuario.findOne({where:{usuario}});

  if(!userFound) return res.status(400).json({message:"Usuario no encontrado"});

	const  isMatch = await bcrypt.compare(password ,userFound.password);

  if(!isMatch) 
    return res.status(400).json({message:"Incorrect password"});

  const token = await createAccessToken({id:userFound.id_usuario});

	res.cookie('token',token );
  
  res.json({
		id:userFound.id_usuario,
		usuario:userFound.usuario,
		email: userFound.email,
    tipo_user :userFound.tipo_user
	});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en registro', error: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, decoded) => {
    if (error) return res.sendStatus(401);

    try {
      const userFound = await Usuario.findByPk(decoded.id);
      if (!userFound) return res.sendStatus(401);

      return res.json({
        id: userFound.id_usuario,
        usuario: userFound.usuario,
        email: userFound.email,
        tipo_user :userFound.tipo_user
      });
    } catch (err) {
      console.error("Error al buscar usuario en verifyToken:", err);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  });
};



export const logout =(req ,res)=>{
  res.cookie('token', "", {
    expires:new Date(0)
  })
  return res.sendStatus(200);
}




export  const profile = async (req,res)=>{
 const userFound =  await Usuario.findByPk(req.user.id);

 if(!userFound) return res.status(400).json({message:"Usuario no encontrado"});
 
 
 return  res.json({
  id:userFound.id_usuario,
  usuario:userFound,
  email:userFound.email,
  nombre:userFound.nombre,
  tipo_user:userFound.tipo_user

 });
 

}