import express from 'express';
import Controllers from './vacunas.controllers.js';
import e from 'express';

const router = express.Router();

router.get('/sanidad', Controllers.getSanidad);

export default router;
