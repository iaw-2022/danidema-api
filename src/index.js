const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
const routesUsers = require('./routes/users.routes');
const routesPartidos = require('./routes/partidos.routes');
const routesArbitros = require('./routes/arbitros.routes');
const routesEquipos = require('./routes/equipos.routes');
const config = require('./config.js')
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/users', routesUsers);
app.use('/partidos', routesPartidos);
app.use('/arbitros', routesArbitros);
app.use('/equipos', routesEquipos);

app.listen(config.PORT);
console.log(`Server on port ${config.PORT}` );