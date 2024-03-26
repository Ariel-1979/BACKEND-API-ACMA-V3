import express from 'express';
const router = express.Router();

import equinosRoutes from '../components/equinos/equinos.routes.js';
import judicialRoutes from '../components/juidicial/judicial.routes.js';
import caninosRoutes from '../components/caninos/caninos.routes.js';

router.get('/caballos', equinosRoutes);
router.get('/caballos/:id', equinosRoutes);
router.get('/caballos/tratamientos/:id', equinosRoutes);
router.put('/caballos/tratamientos/:id', equinosRoutes);
router.put('/caballos/:id', equinosRoutes);
router.get('/caballos_judicializados', equinosRoutes);
router.get('/caballos_no_judicializados', equinosRoutes);
router.post('/caballos', equinosRoutes);
router.post('/caballos_tratamiento', equinosRoutes);
router.post('/caballos_lugar', equinosRoutes);
router.post('/caballos/fotos', equinosRoutes);
router.get('/caballos/fotos/:id', equinosRoutes);
router.delete('/caballos/fotos', equinosRoutes);

router.get('/judicial', judicialRoutes);
router.get('/judicial/:id', judicialRoutes);
router.get('/no_judicial', judicialRoutes);

router.get('/caninos', caninosRoutes);
router.get('/caninos/:id', caninosRoutes);

export default router;
