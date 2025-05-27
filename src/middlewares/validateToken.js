import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next)=>{
	const {token} = req.cookies;

	console.log("validate tokeen")
	console.log(token)
	if(!token)
		return res.status(401).json({message:"No token, authorization denied"});
	
	jwt.verify(token, TOKEN_SECRET , (err,user) => {
		if(err ) return res.status(403).json({message:"Invalido token"});
		console.log(user);
		req.user = user; //user al dato que see guardo ene l token
		
		next();

	});
		





}