const { Pool } = require('pg');
const config = require('./config.js');

const db_config = {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DATABASE,
    port: config.DB_PORT,
    //ssl: { rejectUnauthorized: false }
};

const db = new Pool(db_config);

module.exports = db;