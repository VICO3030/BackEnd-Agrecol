import {Router}  from  'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getProyecto , getProyectos ,crearProyecto,updateProyecto,deleteProyecto } from '../controllers/proyecto/proyecto.controller.js';

const  router =  Router();

router.get('/proyectos',authRequired ,getProyectos)
router.get('/proyectos/:id',authRequired ,getProyecto)
router.post('/proyectos',authRequired , crearProyecto)
router.delete('/proyectos/:id',authRequired ,deleteProyecto)
router.put('/proyectos/:id',authRequired ,updateProyecto)


export default router