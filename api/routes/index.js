import express from 'express';
const router = express.Router();

import horsesRoutes from '../components/horses/Horses.routes.js';
import usersRoutes from '../components/users/Users.routes.js';
import pequesRoutes from '../components/peques/Peques.routes.js';
import equinosRoutes from '../components/equinos/equinos.routes.js';

router.get('/equinos', horsesRoutes);
router.get('/equinos/:id', horsesRoutes);
router.get('/equinos_opciones', horsesRoutes);
router.put('/equinos/:id', horsesRoutes);

router.get('/caballos', equinosRoutes);
router.get('/caballos/:id', equinosRoutes);
router.put('/caballos/:id', equinosRoutes);
router.get('/caballos_judicializados', equinosRoutes);
router.get('/caballos_no_judicializados', equinosRoutes);
router.post('/caballos', equinosRoutes);
router.post('/caballos_tratamiento', equinosRoutes);
router.post('/caballos_lugar', equinosRoutes);
router.post('/caballos/fotos', equinosRoutes);
router.get('/caballos/fotos/:id', equinosRoutes);
router.delete('/caballos/fotos', equinosRoutes);

router.get('/peques', pequesRoutes);
router.get('/peques/:id', pequesRoutes);
router.get('/peques_opciones', pequesRoutes);
router.post('/peques_estados', pequesRoutes);
router.post('/peques_estados_especies', pequesRoutes);
router.post('/peques', pequesRoutes);
router.put('/peques/:id', pequesRoutes);

router.post('/equinos', horsesRoutes);
router.get('/usuarios', usersRoutes);

router.get('/equinos/paginados', horsesRoutes);

export default router;
