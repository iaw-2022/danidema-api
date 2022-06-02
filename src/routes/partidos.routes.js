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
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_partido:
 *                 type: string
 *                 example: 1
 *               hora:
 *                 type: string
 *                 example: 16:00:00
 *               fecha:
 *                 type: string
 *                 example: 2022-05-18T03:00:00.000Z
 *               cancha:
 *                 type: string
 *                 example: Sintetico 2
 *               goles_local:
 *                 type: string
 *                 example: 0
 *               goles_visita:
 *                 type: string
 *                 example: 0
 *               instancia: 
 *                 type: string
 *                 example: Octavos de final
 *               id_equipo_local:
 *                 type: string
 *                 example: 1
 *               id_equipo_visitante: 
 *                 type: string
 *                 example: 4
 *               id_arbitro_designado:
 *                 type: string
 *                 example: 1
 *               informe_partido:
 *                 type: string
 *                 example: partido1.pdf
 *       '404':
 *         description: No se encuentra.
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
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
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_partido:
 *                 type: string
 *                 example: 1
 *               hora:
 *                 type: string
 *                 example: 16:00:00
 *               fecha:
 *                 type: string
 *                 example: 2022-05-18T03:00:00.000Z
 *               cancha:
 *                 type: string
 *                 example: Sintetico 2
 *               goles_local:
 *                 type: string
 *                 example: 0
 *               goles_visita:
 *                 type: string
 *                 example: 0
 *               instancia: 
 *                 type: string
 *                 example: Octavos de final
 *               id_equipo_local:
 *                 type: string
 *                 example: 1
 *               id_equipo_visitante: 
 *                 type: string
 *                 example: 4
 *               id_arbitro_designado:
 *                 type: string
 *                 example: 1
 *               informe_partido:
 *                 type: string
 *                 example: partido1.pdf
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
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_partido:
 *                 type: string
 *                 example: 1
 *               hora:
 *                 type: string
 *                 example: 16:00:00
 *               fecha:
 *                 type: string
 *                 example: 2022-05-18T03:00:00.000Z
 *               cancha:
 *                 type: string
 *                 example: Sintetico 2
 *               goles_local:
 *                 type: string
 *                 example: 0
 *               goles_visita:
 *                 type: string
 *                 example: 0
 *               instancia: 
 *                 type: string
 *                 example: Octavos de final
 *               id_equipo_local:
 *                 type: string
 *                 example: 1
 *               id_equipo_visitante: 
 *                 type: string
 *                 example: 4
 *               id_arbitro_designado:
 *                 type: string
 *                 example: 1
 *               informe_partido:
 *                 type: string
 *                 example: partido1.pdf
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
 *         schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              example: Partido Agregado Correctamente 
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
 *         schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              example: Partido Eliminado Correctamente
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
 *         schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              example: Resultado Cargado Correctamente
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
router.put('/:id', updateResultPartidos);

module.exports = router;