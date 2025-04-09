const { Router } = require('express');
const router = Router();

const { getEquipos, getEquiposById} = require('../controllers/equipos.controller.js');
/**
 * @swagger
 * components:
 *   schemas:
 *     Equipo:
 *       type: object
 *       required:
 *         - codigo_equipo
 *         - nombre
 *         - categoria
 *         - genero
 *       properties:
 *         codigo_equipo:
 *           type: string
 *           description: "codigo del equipo"
 *         nombre:
 *           type: string
 *           description: "nombre del equipo"
 *         categoria:
 *           type: string
 *           description: "categoria del equipo"
 *         genero:
 *           type: string
 *           description: "genero del equipo"
 *         escudo:
 *           type: string
 *           description: "escudo del equipo"
 *         created_at:
 *           type: string
 *           description: "data de creacion del equipo"
 *         updated_at:
 *           type: string
 *           description: "data de actualizacion del equipo"
 *       example:
 *         codigo_equipo: "1"
 *         nombre: "Sin contrato FC"
 *         categoria: "A"
 *         genero: "M"
 *         escudo: "sin-contrato.jpg"
 *         created_at: "2022-06-12 03:50:40"
 *         updated_at: "2022-08-12 03:50:40"
 */

/**
 * @swagger
 * /equipos:
 *   get:
 *     summary: "Obtener todos los equipos."
 *     tags: [Equipos]
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Equipo'
 *               example:
 *                 - codigo_equipo: "1"
 *                   nombre: "Sin contrato FC"
 *                   categoria: "A"
 *                   genero: "M"
 *                   escudo: "sin-contrato.jpg"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                 - codigo_equipo: "2"
 *                   nombre: "Cimarrones FC"
 *                   categoria: "B"
 *                   genero: "M"
 *                   escudo: "cimarrones.jpg"
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
router.get('/', getEquipos);
/**
 * @swagger
 * /equipos/{id}:
 *   get:
 *     summary: "Obtener equipo por id."
 *     tags: [Equipos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id del equipo.
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
 *                 - codigo_equipo: "1"
 *                   nombre: "Sin contrato FC"
 *                   categoria: "A"
 *                   genero: "M"
 *                   escudo: "sin-contrato.jpg"
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
router.get('/:id', getEquiposById);

module.exports = router;