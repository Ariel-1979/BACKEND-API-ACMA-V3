import express from 'express';
import estadisticaController from './estadistica.controllers.js';

const router = express.Router();

router.get('/estadistica', estadisticaController.getEstadistica);

export default router;
