const routes = require('express').Router();
const landings= require("../controllers/landings")
const getNEAsbyQuery= require("../controllers/neas")
const hasQueryParams=require("../middlewares/hasQueryParams")
const {getLandingbyQuery,getLandingbyMass,getLandingbyClass}=landings

// Landings
routes.get('/astronomy/landings',hasQueryParams, getLandingbyQuery);
routes.get('/astronomy/landings/mass/:mass', getLandingbyMass);
routes.get('/astronomy/landings/class/:recclass', getLandingbyClass);

//NEAs
routes.get('/astronomy/neas',hasQueryParams,getNEAsbyQuery);


module.exports = routes;