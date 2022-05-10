const { Router } = require('express');
const router = Router();

const { getArbitros, getArbitrosById} = require('../controllers/arbitros.controller.js');
/**
 * @swagger
 * /arbitros:
 *   get:
 *     description: Use to request all arbitros.
 *     tags: 
 *       - Arbitros
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/', getArbitros);
/**
 * @swagger
 * /arbitros/{id}:
 *   get:
 *     description: Use to request a arbitro.
 *     tags: 
 *       - Arbitros
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the arbitro
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/:id', getArbitrosById);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;