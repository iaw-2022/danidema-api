const { Router } = require('express');
const router = Router();

const { getEquipos, getEquiposById} = require('../controllers/equipos.controller.js');
/**
 * @swagger
 * /equipos:
 *   get:
 *     description: Obtener todos los equipos.
 *     tags: 
 *       - Equipos
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               codigo_equipo:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Sin Contrato FC
 *               categoria:
 *                 type: string
 *                 example: A
 *               genero:
 *                 type: string
 *                 example: M
 *               escudo:
 *                 type: string
 *                 example: sin-contrato.jpg
 *       '404':
 *         description: No se encuentra.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
*/
router.get('/', getEquipos);
/**
 * @swagger
 * /equipos/{id}:
 *   get:
 *     description: Obtener equipo por id.
 *     tags: 
 *       - Equipos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del equipo.
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               codigo_equipo:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Sin Contrato FC
 *               categoria:
 *                 type: string
 *                 example: A
 *               genero:
 *                 type: string
 *                 example: M
 *               escudo:
 *                 type: string
 *                 example: sin-contrato.jpg
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
router.get('/:id', getEquiposById);

module.exports = router;