import express from 'express';
import equinosController from './equinos.controllers.js';

const router = express.Router();

router.get('/caballos', equinosController.getAllEquinos);
router.get('/caballos/:id', equinosController.getEquinoById);
router.get('/caballos/tratamientos/:id', equinosController.getTratamientosById);
router.put('/caballos/tratamientos/:id', equinosController.putTratamientosById);
router.put('/caballos/:id', equinosController.putEquinoById);
router.get(
	'/caballos_judicializados',
	equinosController.getEquinosJudicializados
);
router.get(
	'/caballos_no_judicializados',
	equinosController.getEquinosNoJudicializados
);
router.post('/caballos', equinosController.createEquino);
router.post('/caballos_tratamiento', equinosController.getEquinosByDiario);
router.post('/caballos_lugar', equinosController.getEquinosByLugar);
router.post('/caballos/fotos', equinosController.createFotoById);
router.get('/caballos/fotos/:id', equinosController.getFotosByIdCaballo);
router.delete('/caballos/fotos', equinosController.deleteFotoById);
export default router;
