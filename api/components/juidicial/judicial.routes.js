import express from 'express';
import judicialController from './judicial.controllers.js';

const router = express.Router();

router.get('/judicial', judicialController.getEquinosJudicializados);
router.get('/judicial/:id', judicialController.getEquinosJudicializadoById);
router.get('/no_judicial', judicialController.getEquinosNoJudicializados);
router.post('/judicial', judicialController.createJudicial);
router.put('/judicial', judicialController.updateJudicial);

export default router;
