import express from 'express';
const router = express.Router();

import pequesRoutes from '../components/peques/Peques.routes.js';
import equinosRoutes from '../components/equinos/equinos.routes.js';
import judicialRoutes from '../components/juidicial/judicial.routes.js';

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

router.get('/peques', pequesRoutes);
router.get('/peques/:id', pequesRoutes);
router.get('/peques_opciones', pequesRoutes);
router.post('/peques_estados', pequesRoutes);
router.post('/peques_estados_especies', pequesRoutes);
router.post('/peques', pequesRoutes);
router.put('/peques/:id', pequesRoutes);

export default router;
