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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.get('/:id', getUsersById);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;