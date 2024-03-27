import express from 'express';
import Controller from './felinos.controllers.js';

const router = express.Router();

router.post('/felinos', Controller.createFelino);
router.get('/felinos', Controller.getAllFelinos);
router.get('/felinos-razas-estados', Controller.getRazasYEstadosFelinos);
router.get('/felinos/:id', Controller.getFelinoById);
router.put('/felinos/:id', Controller.putFelinoById);
router.post('/felinos/fotos', Controller.createFotoById);
router.delete('/felinos/fotos', Controller.deleteFotoById);
router.get('/felinos/fotos/:id', Controller.getFotosById);
router.get('/felinos/tratamientos/:id', Controller.getFelinoTratamientosById);
router.put('/felinos/tratamientos/:id', Controller.putFelinoTratamientosById);

export default router;
