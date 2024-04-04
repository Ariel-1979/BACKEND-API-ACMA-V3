import express from 'express';
import Controller from './users.controllers.js';

const router = express.Router();

router.get('/usuarios', Controller.getAllUsers);
router.get('/usuarios/:id', Controller.getUserById);
router.put('/usuarios/:id', Controller.updateUser);

export default router;
