import express from 'express';
import horsesController from './Horses.controllers.js';

const router = express.Router();

router.get('/equinos', horsesController.getAllHorses);
router.get('/equinos/:id', horsesController.getHorseById);
router.get('/equinos_opciones', horsesController.getSelectOptions);
router.put('/equinos/:id', horsesController.putHorseById);

/* router.get('/usuarios/listar', userController.getListAllUsers);
router.get('/usuarios/:id', userController.getSingleUser);
router.post('/usuarios', userController.createUser);
router.delete('/usuarios', userController.deleteUser);
router.put('/usuarios', userController.updateUser); */

export default router;
