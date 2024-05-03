import express from 'express';
import Controller from './adoptantes.controllers.js';

const router = express.Router();

router.get('/adoptantes', Controller.getAdoptantes);
router.get('/adoptantes/:id', Controller.getAdoptanteById);
router.post('/adoptantes', Controller.createAdoptante);
router.put('/adoptantes/:id', Controller.updateAdoptanteById);
router.delete('/adoptantes/:id', Controller.deleteAdoptanteById);

export default router;
