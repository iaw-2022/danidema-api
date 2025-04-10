const { Router } = require('express');
const router = Router();
const checkJwt = require('../auth');

const { getPartidos, getPartidosById, getPartidosByTeam, getPartidosByDate, updateResultPartidos,createPartido,deletePartido} = require('../controllers/partidos.controller.js');
/**
 * @swagger
 * components:
 *   schemas:
 *     Partido:
 *       type: object
 *       required:
 *         - id_partido
 *         - hora
 *         - fecha
 *         - cancha
 *         - instancia
 *         - id_equipo_local
 *         - id_equipo_visitante
 *         - id_arbitro_designado
 *       properties:
 *         id_partido:
 *           type: string
 *           description: "id del partido"
 *         hora:
 *           type: string
 *           description: "hora del partido"
 *         fecha:
 *           type: string
 *           description: "fecha del partido"
 *         cancha:
 *           type: string
 *           description: "cancha del partido"
 *         goles_local:
 *           type: string
 *           description: "goles del equipo local en el partido"
 *         goles_visita:
 *           type: string
 *           description: "goles del equipo visitante en el partido"
 *         instancia:
 *           type: string
 *           description: "instancia del partido"
 *         id_equipo_local:
 *           type: string
 *           description: "id del equipo que juega el partido de local"
 *         id_equipo_visitante:
 *           type: string
 *           description: "id del equipo que juega el partido de visitante"
 *         id_arbitro_designado:
 *           type: string
 *           description: "id del arbitro designado al partido"
 *         created_at:
 *           type: string
 *           description: "data de creacion del partido"
 *         updated_at:
 *           type: string
 *           description: "data de actualizacion del partido"
 *         nombre_local:
 *           type: string
 *           description: "nombre del equipo que juega el partido de local"
 *         escudo_local:
 *           type: string
 *           description: "nombre del archivo que contiene el escudo del equipo local"
 *         nombre_visitante:
 *           type: string
 *           description: "nombre del equipo que juega el partido de visitante"
 *         escudo_visitante:
 *           type: string
 *           description: "nombre del archivo que contiene el escudo del equipo visitante"
 *         nombre_arbitro:
 *           type: string
 *           description: "nombre del arbitro que dirige el partido"
 *       example:
 *         id_partido: "1"
 *         hora: "16:00:00"
 *         fecha: "2022-05-18T03:00:00.000Z"
 *         cancha: "Sintetico 1"
 *         goles_local: "0"
 *         goles_visita: "1"
 *         instancia: "Final"
 *         id_equipo_local: "1"
 *         id_equipo_visitante: "4"
 *         id_arbitro_designado: "1"
 *         created_at: "2022-06-12 03:50:40"
 *         updated_at: "2022-08-12 03:50:40"
 *         nombre_local: "Sin Contrato FC"
 *         escudo_local: "sin-contrato.jpg"
 *         nombre_visitante: "Mandiyu"
 *         escudo_visitante: "mandiyu-revenge.jpg"
 *         nombre_arbitro: "Juan Maglio"
 */

/**
 * @swagger
 * /partidos:
 *   get:
 *     summary: "Obtener todos los partidos."
 *     tags: [Partidos]
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Partido'
 *               example:
 *                 - id_partido: "1"
 *                   hora: "16:00:00"
 *                   fecha: "2022-05-18T03:00:00.000Z"
 *                   cancha: "Sintetico 1"
 *                   goles_local: "0"
 *                   goles_visita: "1"
 *                   instancia: "Final"
 *                   id_equipo_local: "1"
 *                   id_equipo_visitante: "4"
 *                   id_arbitro_designado: "1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Sin Contrato FC"
 *                   escudo_local: "sin-contrato.jpg"
 *                   nombre_visitante: "Mandiyu"
 *                   escudo_visitante: "mandiyu-revenge.jpg"
 *                   nombre_arbitro: "Juan Maglio"
 *                 - id_partido: "2"
 *                   hora: "12:00:00"
 *                   fecha: "2022-06-18T03:00:00.000Z"
 *                   cancha: "Sintetico 2"
 *                   goles_local: "0"
 *                   goles_visita: "0"
 *                   instancia: "Octavos de final"
 *                   id_equipo_local: "2"
 *                   id_equipo_visitante: "3"
 *                   id_arbitro_designado: "2"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Fondo Blanco Fem"
 *                   escudo_local: "fondo-blanco-fem.jpg"
 *                   nombre_visitante: "Setenta Treinta Fem"
 *                   escudo_visitante: "setenta-treinta-fem.jpg"
 *                   nombre_arbitro: "Rodrigo Gomez"
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
router.get('/', getPartidos);
/**
 * @swagger
 * /partidos/{id}:
 *   get:
 *     summary: "Obtener partido por id."
 *     tags: [Partidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id del partido.
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
 *                 $ref: '#components/schemas/Partido'
 *               example:
 *                 - id_partido: "1"
 *                   hora: "16:00:00"
 *                   fecha: "2022-05-18T03:00:00.000Z"
 *                   cancha: "Sintetico 1"
 *                   goles_local: "0"
 *                   goles_visita: "1"
 *                   instancia: "Final"
 *                   id_equipo_local: "1"
 *                   id_equipo_visitante: "4"
 *                   id_arbitro_designado: "1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Sin Contrato FC"
 *                   escudo_local: "sin-contrato.jpg"
 *                   nombre_visitante: "Mandiyu"
 *                   escudo_visitante: "mandiyu-revenge.jpg"
 *                   nombre_arbitro: "Juan Maglio"
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
router.get('/:id', getPartidosById);
/**
 * @swagger
 * /partidos/equipo/{id-equipo}:
 *   get:
 *     summary: "Obtener partidos por equipo"
 *     tags: [Partidos]
 *     parameters:
 *       - name: id-equipo
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
 *                 $ref: '#components/schemas/Partido'
 *               example:
 *                 - id_partido: "1"
 *                   hora: "16:00:00"
 *                   fecha: "2022-05-18T03:00:00.000Z"
 *                   cancha: "Sintetico 1"
 *                   goles_local: "0"
 *                   goles_visita: "1"
 *                   instancia: "Final"
 *                   id_equipo_local: "1"
 *                   id_equipo_visitante: "4"
 *                   id_arbitro_designado: "1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Sin Contrato FC"
 *                   escudo_local: "sin-contrato.jpg"
 *                   nombre_visitante: "Mandiyu"
 *                   escudo_visitante: "mandiyu-revenge.jpg"
 *                   nombre_arbitro: "Juan Maglio"
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
router.get('/equipo/:id', getPartidosByTeam);

/**
 * @swagger
 * /partidos/fecha/{fecha}:
 *   get:
 *     summary: "Obtener todos los partidos mayor a la fecha actual."
 *     tags: [Partidos]
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Partido'
 *               example:
 *                 - id_partido: "1"
 *                   hora: "16:00:00"
 *                   fecha: "2022-05-18T03:00:00.000Z"
 *                   cancha: "Sintetico 1"
 *                   goles_local: "0"
 *                   goles_visita: "1"
 *                   instancia: "Final"
 *                   id_equipo_local: "1"
 *                   id_equipo_visitante: "4"
 *                   id_arbitro_designado: "1"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Sin Contrato FC"
 *                   escudo_local: "sin-contrato.jpg"
 *                   nombre_visitante: "Mandiyu"
 *                   escudo_visitante: "mandiyu-revenge.jpg"
 *                   nombre_arbitro: "Juan Maglio"
 *                 - id_partido: "2"
 *                   hora: "12:00:00"
 *                   fecha: "2022-06-18T03:00:00.000Z"
 *                   cancha: "Sintetico 2"
 *                   goles_local: "0"
 *                   goles_visita: "0"
 *                   instancia: "Octavos de final"
 *                   id_equipo_local: "2"
 *                   id_equipo_visitante: "3"
 *                   id_arbitro_designado: "2"
 *                   created_at: "2022-06-12 03:50:40"
 *                   updated_at: "2022-08-12 03:50:40"
 *                   nombre_local: "Fondo Blanco Fem"
 *                   escudo_local: "fondo-blanco-fem.jpg"
 *                   nombre_visitante: "Setenta Treinta Fem"
 *                   escudo_visitante: "setenta-treinta-fem.jpg"
 *                   nombre_arbitro: "Rodrigo Gomez"
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
router.get('/fecha/:fecha', getPartidosByDate);
/**
 * @swagger
 * /partidos:
 *   post:
 *     summary: "Agregar partido."
 *     security:
 *       - BearerAuth: []
 *     tags: [Partidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - hora
 *               - fecha
 *               - cancha
 *               - instancia
 *               - id_local
 *               - id_visita
 *               - id_arbitro
 *             properties:
 *               hora: 
 *                 type: string
 *               fecha:
 *                 type: string
 *               cancha:
 *                 type: string
 *               instancia: 
 *                 type: string
 *               id_local:
 *                 type: integer
 *               id_visita:
 *                 type: integer
 *               id_arbitro:
 *                 type: integer
 *             example:
 *               hora: "14:00"
 *               fecha: "12/12/2022"
 *               cancha: "Sintetico 1"
 *               instancia: "Final"
 *               id_local: "1"
 *               id_visita: "2"
 *               id_arbitro: "1"
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Partido Agregado Correctamente" 
*/
router.post('/',checkJwt, createPartido);
/**
 * @swagger
 * /partidos/{id}:
 *   delete:
 *     summary: "Borrar partido por id."
 *     security:
 *       - BearerAuth: []
 *     tags: [Partidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id del partido.
 *         schema:
 *           type : integer
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Partido Eliminado Correctamente"
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
router.delete('/:id',checkJwt, deletePartido);
/**
 * @swagger
 * /partidos/{id}:
 *   put:
 *     summary: "Agregar resultado a un partido."
 *     security:
 *       - BearerAuth: []
 *     tags: [Partidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type : integer
 *         required: true
 *         description: id del partido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               goles_local:
 *                 type: integer
 *               goles_visita:
 *                 type: integer
 *             example:
 *               goles_local: "0"
 *               goles_visita: "0"
 *     responses:
 *       200:
 *         description: "Respuesta correcta."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resultado Cargado Correctamente"
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
router.put('/:id',checkJwt, updateResultPartidos);

module.exports = router;