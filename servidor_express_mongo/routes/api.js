const routes = require('express').Router();
const apiControllers= require("../controllers/api")
const {getLandingbyQuery,getLandingbyMass,getLandingbyClass}=apiControllers

routes.get('/astronomy/landings', getLandingbyQuery);
routes.get('/astronomy/landings/mass/:mass', getLandingbyMass);
routes.get('/astronomy/landings/class/:recclass', getLandingbyClass);

module.exports = routes;