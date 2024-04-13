import express from 'express';
import Controllers from './vacunas.controllers.js';
import e from 'express';

const router = express.Router();

router.get('/sanidad', Controllers.getSanidad);
router.get('/sanidad/:id', Controllers.getSanidadById);
router.post('/sanidad', Controllers.createSanidad);
router.put('/sanidad', Controllers.updateSanidad);

export default router;
