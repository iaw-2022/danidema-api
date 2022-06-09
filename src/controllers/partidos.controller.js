const db = require('../database');
const moment = require('moment'); 

const getPartidos = async(req, res) =>{
    const response = await db.query('SELECT partidos.*, local.nombre as nombre_local,local.escudo as escudo_local,visitante.nombre as nombre_visitante,visitante.escudo as escudo_visitante, arbitros.nombre as nombre_arbitro FROM "partidos" JOIN equipos as local ON partidos.id_equipo_local = local.codigo_equipo JOIN arbitros ON partidos.id_arbitro_designado = arbitros.id_arbitro join equipos as visitante on visitante.codigo_equipo = partidos.id_equipo_visitante');
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPartidosById = async(req, res) =>{
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT partidos.*, local.nombre as nombre_local,local.escudo as escudo_local,visitante.nombre as nombre_visitante,visitante.escudo as escudo_visitante, arbitros.nombre as nombre_arbitro FROM "partidos" JOIN equipos as local ON partidos.id_equipo_local = local.codigo_equipo JOIN arbitros ON partidos.id_arbitro_designado = arbitros.id_arbitro join equipos as visitante on visitante.codigo_equipo = partidos.id_equipo_visitante WHERE partidos.id_partido = $1', [id]);
        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }
    else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getPartidosByTeam = async(req, res) =>{
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT partidos.*, local.nombre as nombre_local,local.escudo as escudo_local,visitante.nombre as nombre_visitante,visitante.escudo as escudo_visitante, arbitros.nombre as nombre_arbitro FROM "partidos" JOIN equipos as local ON partidos.id_equipo_local = local.codigo_equipo JOIN arbitros ON partidos.id_arbitro_designado = arbitros.id_arbitro join equipos as visitante on visitante.codigo_equipo = partidos.id_equipo_visitante WHERE (id_equipo_local = $1) or (id_equipo_visitante = $1)', [id]);
        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }
    else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getPartidosByDate = async(req, res) =>{
    const response = await db.query('SELECT partidos.*, local.nombre as nombre_local,local.escudo as escudo_local,visitante.nombre as nombre_visitante,visitante.escudo as escudo_visitante, arbitros.nombre as nombre_arbitro FROM "partidos" JOIN equipos as local ON partidos.id_equipo_local = local.codigo_equipo JOIN arbitros ON partidos.id_arbitro_designado = arbitros.id_arbitro join equipos as visitante on visitante.codigo_equipo = partidos.id_equipo_visitante WHERE fecha > now()');
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const createPartido = async(req, res) =>{
    const { hora, fecha, cancha, instancia, id_local, id_visita,id_arbitro} = req.body;
    const response = await db.query('INSERT INTO partidos (hora, fecha, cancha, instancia, id_equipo_local, id_equipo_visitante,id_arbitro_designado) VALUES ($1, $2, $3, $4, $5, $6, $7)', [hora,moment(fecha).format("DD/MM/YYYY"), cancha, instancia, id_local, id_visita,id_arbitro]);
    res.json({
        message: 'Partido Agregado Correctamente'
    })
};

const updateResultPartidos = async(req, res) =>{
    const id = req.params.id
    if(!isNaN(id)){
        const { goles_local, goles_visita, informe} = req.body;
        const response = await db.query('UPDATE partidos SET goles_local = $1, goles_visita = $2, informe_partido = $3 WHERE id_partido = $4', [goles_local, goles_visita, informe, id]);
        if(response.rowCount > 0){
            res.json({
                message: 'Resultado Cargado Correctamente',
            })
        }
        else{
            res.status(404).json({error: 'not found'});
        }
    }
    else{
        res.status(400).json({error: 'invalid parameter'});
    }

};

const deletePartido = async(req, res) =>{
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('DELETE FROM partidos WHERE id_partido = $1', [id]);
        if(response.rowCount > 0){
            res.json({
                message: 'Partido Eliminado Correctamente',
            })
        }
        else{
            res.status(404).json({error: 'not found'});
        }
    }
    else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

module.exports = {
    getPartidos,
    getPartidosById,
    getPartidosByTeam,
    getPartidosByDate,
    updateResultPartidos,
    createPartido,
    deletePartido
}