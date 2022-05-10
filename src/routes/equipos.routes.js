const { Router } = require('express');
const router = Router();

const { getEquipos, getEquiposById} = require('../controllers/equipos.controller.js');
/**
 * @swagger
 * /equipos:
 *   get:
 *     description: Use to request all equipos.
 *     tags: 
 *       - Equipos
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/', getEquipos);
/**
 * @swagger
 * /equipos/{id}:
 *   get:
 *     description: Use to request a equipo.
 *     tags: 
 *       - Equipos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the equipo
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/:id', getEquiposById);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;