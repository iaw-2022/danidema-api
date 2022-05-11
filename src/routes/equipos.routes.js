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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.get('/:id', getEquiposById);

module.exports = router;