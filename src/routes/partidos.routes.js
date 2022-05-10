const { Router } = require('express');
const router = Router();

const { getPartidos, getPartidosById,getPartidosByTeam} = require('../controllers/partidos.controller.js');
/**
 * @swagger
 * /partidos:
 *   get:
 *     description: Use to request all partidos.
 *     tags: 
 *       - Partidos
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/', getPartidos);
/**
 * @swagger
 * /partidos/{id}:
 *   get:
 *     description: Use to request a partido.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the partido
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/:id', getPartidosById);
/**
 * @swagger
 * /partidos/equipo/{id-equipo}:
 *   get:
 *     description: Use to request a partido for equipo.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id-equipo
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
router.get('/equipo/:id', getPartidosByTeam);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;