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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
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
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
 */
router.get('/:id', getArbitrosById);

module.exports = router;