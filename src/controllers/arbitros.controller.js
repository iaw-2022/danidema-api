const db = require('../database');

const getArbitros = async(req, res) =>{
    const response = await db.query('SELECT * FROM arbitros');
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
};

const getArbitrosById = async(req, res) =>{
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM arbitros WHERE id_arbitro = $1', [id]);

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

module.exports = {
    getArbitros,
    getArbitrosById
}