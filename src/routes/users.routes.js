const { Router } = require('express');
const router = Router();

const { getUsers, getUsersById} = require('../controllers/users.controller.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: "id autonumerico del usuario"
 *         name:
 *           type: string
 *           description: "nombre del usuario"
 *         email:
 *           type: string
 *           description: "email del usuario"
 *         email_verified_at:
 *           type: string
 *           description: "verificacion de email del usuario"
 *         password:
 *           type: string
 *           description: "contraseña del usuario"
 *         remember_token:
 *           type: string
 *           description: "token del usuario"
 *         created_at:
 *           type: string
 *           description: "data de creacion del usuario"
 *         updated_at:
 *           type: string
 *           description: "data de actualizacion del usuario"
 *       example:
 *         id: "1"
 *         name: "Gabriel"
 *         email: "gabriel@example1.com"
 *         email_verified_at: "2022-07-12 03:50:40"
 *         password: "passwordexample1"
 *         remember_token: "tokenexample1"
 *         created_at: "2022-06-12 03:50:40"
 *         updated_at: "2022-08-12 03:50:40"
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: "Obtener todos los usuarios."
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/User'
 *               example:
 *                 - id: "1"
 *                   name: "Gabriel"
 *                   email: "gabriel@example1.com"
 *                   email_verified_at: "2022-07-12 03:50:40"
 *                   password: "passwordexample1"
 *                   remember_token: "tokenexample1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                 - id: "2"
 *                   name: "Daniel"
 *                   email: "daniel@example1.com"
 *                   email_verified_at: "2022-07-12 03:50:40"
 *                   password: "passwordexample2"
 *                   remember_token: "tokenexample2"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *       404:
 *         description: No se encuentra.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "not found"
 */
router.get('/', getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: "Obtener usuario por id."
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id del usuario.
 *         schema:
 *           type : integer
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/User'
 *               example:
 *                 - id: "1"
 *                   name: "Gabriel"
 *                   email: "gabriel@example1.com"
 *                   email_verified_at: "2022-07-12 03:50:40"
 *                   password: "passwordexample1"
 *                   remember_token: "tokenexample1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *       400:
 *         description: Parametro invalido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "invalid parameter"
 *       404:
 *         description: No se encuentra.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "not found"
 */
router.get('/:id', getUsersById);

module.exports = router;