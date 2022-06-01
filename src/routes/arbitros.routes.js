const { Router } = require('express');
const router = Router();

const { getArbitros, getArbitrosById} = require('../controllers/arbitros.controller.js');
/**
 * @swagger
 * /arbitros:
 *   get:
 *     description: Obtener todos los arbitros.
 *     tags: 
 *       - Arbitros
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_arbitro:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Juan Maglio
 *               contacto:
 *                 type: string
 *                 example: 2915656532
 *       '404':
 *         description: No se encuentra.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
 */
router.get('/', getArbitros);
/**
 * @swagger
 * /arbitros/{id}:
 *   get:
 *     description: Obtener arbitro por id.
 *     tags: 
 *       - Arbitros
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del arbitro.
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_arbitro:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Juan Maglio
 *               contacto:
 *                 type: string
 *                 example: 2915656532
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
router.get('/:id', getArbitrosById);

module.exports = router;