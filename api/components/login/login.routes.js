import express from 'express';
import Controllers from './login.controllers.js';

const router = express.Router();

router.post('/login', Controllers.loginAuth);

export default router;
