import express from 'express';
import Controller from './caninos.controllers.js';

const router = express.Router();

router.post('/caninos', Controller.createCanino);
router.get('/caninos', Controller.getAllCaninos);
router.get('/caninos-razas-estados', Controller.getRazasYEstadosCaninos);
router.get('/caninos/:id', Controller.getCaninoById);
router.put('/caninos/:id', Controller.putCaninoById);
router.post('/caninos/fotos', Controller.createFotoById);
router.delete('/caninos/fotos', Controller.deleteFotoById);
router.get('/caninos/fotos/:id', Controller.getFotosById);
router.get('/caninos/tratamientos/:id', Controller.getCaninoTratamientosById);
router.put('/caninos/tratamientos/:id', Controller.putCaninoTratamientosById);

export default router;
