import express from 'express';
import Controller from './caninos.controllers.js';

const router = express.Router();

router.get('/caninos', Controller.getAllCaninos);
router.get('/caninos/:id', Controller.getCaninoById);

export default router;
