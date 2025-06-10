import { Router } from 'express';
import {
  getObjetivosLogicos,
  getObjetivoLogico,
  crearObjetivoLogico,
  updateObjetivoLogico,
  deleteObjetivoLogico
} from '../controllers/proyecto/nivel.controller.js';  // Asegúrate de que la ruta esté bien

const router = Router();
router.get('/objetivos-logicos', getObjetivosLogicos);
router.get('/objetivos-logicos/:id', getObjetivoLogico);
router.post('/objetivos-logicos', crearObjetivoLogico);
router.put('/objetivos-logicos/:id', updateObjetivoLogico);
router.delete('/objetivos-logicos/:id', deleteObjetivoLogico);

export default router;
