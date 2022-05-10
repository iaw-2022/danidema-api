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

const createUsers = async(req, res) =>{
    const { name, email, password} = req.body;
    const response = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email, password}
        }
    })
};

const updateUsers = async(req, res) =>{
    const id = req.params.id
    const { name, email, password} = req.body
    const response = await pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id]);
    console.log(response);
    res.json('User Updated Successfully');
};

const deleteUsers = async(req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json('User deleted successfully');
};

module.exports = {
    getPartidos,
    getPartidosById,
    getPartidosByTeam
}