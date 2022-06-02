const { Router } = require('express');
const router = Router();

const { getUsers, getUsersById} = require('../controllers/users.controller.js');
/**
 * @swagger
 * /users:
 *   get:
 *     description: Obtener todos los usuarios.
 *     tags: 
 *       - Users
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Gabriel
 *               email:
 *                 type: string
 *                 example: gabriel@example1.com
 *               password:
 *                 type: string
 *                 example: contraseñaexample1
 *       '404':
 *         description: No se encuentra.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
*/
router.get('/', getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Obtener usuario por id.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario.
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Gabriel
 *               email:
 *                 type: string
 *                 example: gabriel@example1.com
 *               password:
 *                 type: string
 *                 example: contraseñaexample1
 *       '400':
 *         description: Parametro invalido.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid parameter
 *       '404':
 *         description: No se encuentra.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
*/
router.get('/:id', getUsersById);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;