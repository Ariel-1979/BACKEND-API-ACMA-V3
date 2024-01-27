import express from 'express';
import userController from './Users.controllers.js';

const router = express.Router();

router.get('/usuarios', userController.getAllUsers);
/* router.get('/usuarios/listar', userController.getListAllUsers);
router.get('/usuarios/:id', userController.getSingleUser);
router.post('/usuarios', userController.createUser);
router.delete('/usuarios', userController.deleteUser);
router.put('/usuarios', userController.updateUser); */

export default router;
