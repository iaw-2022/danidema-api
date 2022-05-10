require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    SERVER: process.env.SERVER,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DATABASE,
    DB_PORT: process.env.DB_PORT
}