import express from 'express';
import estadisticaController from './estadistica.controllers.js';

const router = express.Router();

router.get('/estadistica', estadisticaController.getEstadistica);
router.post('/estadistica', estadisticaController.getEquinosPorPeriodos);
router.get('/estadistica-canina', estadisticaController.getEstadisticaCanina);
router.get('/estadistica-felina', estadisticaController.getEstadisticaFelina);

export default router;
