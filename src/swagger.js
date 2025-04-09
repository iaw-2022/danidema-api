const path = require("path")
const config = require('./config.js')

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'Todo Fútbol API',
            description: 'API Docs',
            servers: [config.SERVER],
            version: '1.0.0'
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.js")}`,'./src/index.js'],
}

module.exports = swaggerOptions