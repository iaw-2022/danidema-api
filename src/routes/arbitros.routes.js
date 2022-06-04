const { Router } = require('express');
const router = Router();

const { getArbitros, getArbitrosById} = require('../controllers/arbitros.controller.js');
/**
 * @swagger
 * components:
 *   schemas:
 *     Arbitro:
 *       type: object
 *       required:
 *         - id_arbitro
 *         - nombre
 *         - contacto
 *       properties:
 *         id_arbitro:
 *           type: string
 *           description: "id del arbitro"
 *         nombre:
 *           type: string
 *           description: "nombre del arbitro"
 *         contacto:
 *           type: string
 *           description: "contacto del arbitro"
 *         created_at:
 *           type: string
 *           description: "data de creacion del arbitro"
 *         updated_at:
 *           type: string
 *           description: "data de actualizacion del arbitro"
 *       example:
 *         id_arbitro: "1"
 *         nombre: "Rodrigo Gomez"
 *         contacto: "2915456879"
 *         created_at: "2022-06-12 03:50:40"
 *         updated_at: "2022-08-12 03:50:40"
 */



/**
 * @swagger
 * /arbitros:
 *   get:
 *     summary: "Obtener todos los arbitros."
 *     tags: [Arbitros]
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Arbitro'
 *               example:
 *                 - id_arbitro: "1"
 *                   nombre: "Rodrigo Gomez"
 *                   contacto: "2914555687"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                 - id_arbitro: "2"
 *                   nombre: "Juan Maglio"
 *                   contacto: "2914568789"
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
router.get('/', getArbitros);
/**
 * @swagger
 * /arbitros/{id}:
 *   get:
 *     summary: "Obtener arbitro por id."
 *     tags: [Arbitros]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id del arbitro.
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
 *                 - id_arbitro: "1"
 *                   nombre: "Rodrigo Gomez"
 *                   contacto: "2914555687"
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
router.get('/:id', getArbitrosById);

module.exports = router;