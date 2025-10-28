import express from 'express';
import { userControllers } from '../controllers/userControllers.js';

const router = express.Router();







//Rutas para llamar al usuario
router.get('/',userControllers.getUsers);
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

router.post('/',userControllers.createUser);
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

router.put("/:id", userControllers.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Eliminar usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID del usuario
 *    responses:
 *      200:
 *        description: Usuario eliminado correctamente
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 *
 */
//metodo para eliminar delete
//metodo para modificar patch
export default router;
