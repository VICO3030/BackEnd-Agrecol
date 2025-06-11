import { Router } from 'express';
import {
  getObjetivosByProyecto,
  getObjetivoLogico,
  crearObjetivoLogico,
  updateObjetivoLogico,
  deleteObjetivoLogico,

} from '../controllers/proyecto/nivel.controller.js';  

const router = Router();
router.get('/objetivos-logicos/:id', getObjetivoLogico);
router.post('/objetivos-logicos', crearObjetivoLogico);
router.put('/objetivos-logicos/:id', updateObjetivoLogico);
router.delete('/objetivos-logicos/:id', deleteObjetivoLogico);
router.get('/objetivosProyecto/:id', getObjetivosByProyecto);

export default router;
