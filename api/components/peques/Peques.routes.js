import express from 'express';
import pequesController from './Peques.controllers.js';

const router = express.Router();

router.get('/peques', pequesController.getAllPeques);
router.get('/peques/:id', pequesController.getPequeById);
router.get('/peques_opciones', pequesController.getSelectOptions);
router.post('/peques', pequesController.getPequesByEspecies);
router.post('/peques_estados', pequesController.getPequesByEstado);
router.post(
	'/peques_estados_especies',
	pequesController.getPequesByEstadoAndEspecie
);

router.put('/peques/:id', pequesController.getPequeById);

/* router.get('/equinos/:id', horsesController.getHorseById);
router.put('/equinos/:id', horsesController.putHorseById);
 */

export default router;
