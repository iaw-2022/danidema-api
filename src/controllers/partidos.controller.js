const db = require('../database');


const getPartidos = async(req, res) =>{
    const response = await db.query('SELECT * FROM partidos');
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getPartidosById = async(req, res) =>{
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM partidos WHERE id_partido = $1', [id]);
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
    console.log(id);
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM partidos WHERE (id_equipo_local = $1) or (id_equipo_visitante = $1)', [id]);
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

const createPartido = async(req, res) =>{
    const { hora, fecha, cancha, instancia, id_local, id_visita,id_arbitro} = req.body;
    const response = await db.query('INSERT INTO partidos (hora, fecha, cancha, instancia, id_equipo_local, id_equipo_visitante,id_arbitro_designado) VALUES ($1, $2, $3, $4, $5, $6, $7)', [hora, fecha, cancha, instancia, id_local, id_visita,id_arbitro]);
    console.log(response);
    res.json({
        message: 'Partido Agregado Correctamente',
        body: {
            partido: {hora, fecha, cancha, instancia, id_local, id_visita,id_arbitro}
        }
    })
};

const updateResultPartidos = async(req, res) =>{
    const id = req.params.id
    const { goles_local, goles_visita, informe} = req.body;
    const response = await db.query('UPDATE partidos SET goles_local = $1, goles_visita = $2, informe_partido = $3 WHERE id_partido = $4', [goles_local, goles_visita, informe, id]);
    res.status(200).json(response.rows);
    res.json('Partido Updated Successfully');
};

const deletePartido = async(req, res) =>{
    const id = req.params.id;
    const response = await db.query('DELETE FROM partidos WHERE id_partido = $1', [id]);
    console.log(response);
    res.json('Partido eliminado correctamente');
};

module.exports = {
    getPartidos,
    getPartidosById,
    getPartidosByTeam,
    updateResultPartidos,
    createPartido,
    deletePartido
}