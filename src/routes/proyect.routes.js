import {Router}  from  'express';

import { getProyecto , getProyectos ,crearProyecto,updateProyecto,deleteProyecto } from '../controllers/proyecto/proyecto.controller.js';

const  router =  Router();

router.get('/proyectos' ,getProyectos)
router.get('/proyectos/:id' ,getProyecto)
router.post('/proyectos' , crearProyecto)
router.delete('/proyectos/:id' ,deleteProyecto)
router.put('/proyectos/:id' ,updateProyecto)



export default router;