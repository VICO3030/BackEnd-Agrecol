import { Router } from 'express';
import {
  getIndicadores,
  getIndicador,
  crearIndicador,
  updateIndicador,
  deleteIndicador,
} from '../controllers/proyecto/indicador.controller.js';  // Asegúrate de que la ruta esté bien

const router = Router();


router.get('/indicadores', getIndicadores);
router.get('/indicadores/:id', getIndicador);
router.post('/indicadores', crearIndicador);
router.put('/indicadores/:id', updateIndicador);
router.delete('/indicadores/:id', deleteIndicador);

export default router;
