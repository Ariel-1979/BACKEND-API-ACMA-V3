import express from 'express';
const router = express.Router();

import horsesRoutes from '../components/horses/Horses.routes.js';
import usersRoutes from '../components/users/Users.routes.js';

router.get('/equinos', horsesRoutes);
router.get('/equinos/:id', horsesRoutes);
router.get('/equinos_opciones', horsesRoutes);
router.put('/equinos/:id', horsesRoutes);

router.post('/equinos', horsesRoutes);
router.get('/usuarios', usersRoutes);

router.get('/equinos/paginados', horsesRoutes);

export default router;
