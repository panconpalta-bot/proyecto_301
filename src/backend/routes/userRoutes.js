import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();







//Rutas para llamar al usuario
router.get('/',userController.getUsers);
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *           type: integer
 *           example: 1
 *        email:
 *           type: string
 *           example: jack@gmail.com
 *        name:
 *           type: string
 *           example: jack
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *     200:
 *       description: ok
 *      
 */

router.post('/',userController.createUser);
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: crear nuevo usuario
 *    tags: [Users]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: jack@gmail.com
 *              name:
 *                type: string
 *                example: jack
 *    responses:
 *      201:
 *        description: usuario creado correctamente
 *        content:
 *          application/json:
 *              $ref: '#/components/schemas/User'
 * 
 *      400:
 *        description: Datos invalidos
 * 
 *      500:
 *        description: Error del servidor
 */
router.put('/:id',userController.updateUser);
/**
 * @swagger
 * /api/users/:
 *  post:
 *   summary: actualizar usuario
 *   tags: [Users]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type:object
 *           properties:
 *             id:
 *               type: int
 *               example: 1
 *             email:
 *                type: string
 *                example: jack@gmail.com
 *              name:
 *                type: string
 *                example: jack
 *   responses: 
 *     200:
 *       description: usuario actulizado correctamente
 */
//metodo para eliminar delete
//metodo para modificar patch
export default router;
