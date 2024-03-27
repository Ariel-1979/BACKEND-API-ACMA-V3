import express from 'express';
const router = express.Router();

import equinosRoutes from '../components/equinos/equinos.routes.js';
import judicialRoutes from '../components/juidicial/judicial.routes.js';
import caninosRoutes from '../components/caninos/caninos.routes.js';
import felinosRoutes from '../components/felinos/felinos.routes.js';

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

router.post('/caninos', caninosRoutes);
router.get('/caninos', caninosRoutes);
router.get('/caninos/:id', caninosRoutes);
router.put('/caninos/:id', caninosRoutes);
router.get('/caninos-razas-estados', caninosRoutes);
router.post('/caninos/fotos', caninosRoutes);
router.delete('/caninos/fotos', caninosRoutes);
router.get('/caninos/fotos/:id', caninosRoutes);
router.get('/caninos/tratamientos/:id', caninosRoutes);
router.put('/caninos/tratamientos/:id', caninosRoutes);

router.post('/felinos', felinosRoutes);
router.get('/felinos', felinosRoutes);
router.get('/felinos/:id', felinosRoutes);
router.put('/felinos/:id', felinosRoutes);
router.get('/felinos-razas-estados', felinosRoutes);
router.post('/felinos/fotos', felinosRoutes);
router.delete('/felinos/fotos', felinosRoutes);
router.get('/felinos/fotos/:id', felinosRoutes);
router.get('/felinos/tratamientos/:id', felinosRoutes);
router.put('/felinos/tratamientos/:id', felinosRoutes);

export default router;
