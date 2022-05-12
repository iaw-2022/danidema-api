const { Router } = require('express');
const router = Router();

const { getPartidos, getPartidosById,getPartidosByTeam, updateResultPartidos,createPartido,deletePartido} = require('../controllers/partidos.controller.js');
/**
 * @swagger
 * /partidos:
 *   get:
 *     description: Obtener todos los partidos.
 *     tags: 
 *       - Partidos
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.get('/', getPartidos);
/**
 * @swagger
 * /partidos/{id}:
 *   get:
 *     description: Obtener partido por id.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del partido
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.get('/:id', getPartidosById);
/**
 * @swagger
 * /partidos/equipo/{id-equipo}:
 *   get:
 *     description: Obtener partidos por equipo.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id-equipo
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
router.get('/equipo/:id', getPartidosByTeam);
/**
 * @swagger
 * /partidos:
 *   post:
 *     description: Agregar un partido.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: body
 *         name: partido
 *         description: Carga de un partido nuevo.
 *         schema:
 *          type: object
 *          required:
 *              - hora: true
 *              - fecha: true
 *              - cancha: true
 *              - instrancia: true
 *              - id_local: true
 *              - id_visita: true
 *              - id_arbitro: true
 *          properties:
 *              hora:
 *                  type: string
 *              fecha:
 *                  type: string
 *              cancha:
 *                  type: string
 *              instancia:
 *                  type: string
 *              id_local:
 *                  type: integer
 *              id_visita:
 *                  type: integer
 *              id_arbitro:
 *                  type: integer
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra. 
*/
router.post('/', createPartido);
/**
 * @swagger
 * /partidos/{id}:
 *   delete:
 *     description: Borrar partido por id.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del partido
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.delete('/:id', deletePartido);
/**
 * @swagger
 * /partidos/{id}:
 *   put:
 *     description: Agregar resultado a un partido y el informe correspondiente.
 *     tags: 
 *       - Partidos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del partido
 *       - in: body
 *         name: resultado
 *         description: Resultado del partido.
 *         schema:
 *          type: object
 *          required:
 *              - goles_local
 *              - goles_visita
 *              - informe
 *          properties:
 *              goles_local:
 *                  type: integer
 *              goles_visita:
 *                  type: integer
 *              informe:
 *                  type: string
 *     responses:
 *       '200':
 *         description: Respuesta correcta.
 *       '400':
 *         description: Parametro invalido.
 *       '404':
 *         description: No se encuentra.
*/
router.put('/:id', updateResultPartidos);

module.exports = router;