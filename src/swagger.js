const path = require("path")
const config = require('./config.js')

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Todo Fútbol API',
            description: 'API Docs',
            servers: [config.SERVER]
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.routes.js")}`],
}

module.exports = swaggerOptions