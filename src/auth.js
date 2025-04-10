const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'https://todo-futbol/api',
  issuerBaseURL: `https://dev-gis572dz.us.auth0.com/`,
});

module.exports = checkJwt;