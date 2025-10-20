import express, { Router } from 'express';
import { userController } from '../controllers/userController.js';
//trae
// r controlador

const router = express.Router();

//rutas para el usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);

export default router ;
