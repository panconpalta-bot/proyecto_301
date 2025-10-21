import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);
//metodo para eliminar delete
//metodo para modificar patch
export default router;
