const routes = require('express').Router();
const landings= require("../controllers/landings")
const getNEAsbyQuery= require("../controllers/neas")
const hasLandingQuery=require("../middlewares/hasLandingQuery")
const {getLandingbyQuery,getLandingbyMass,getLandingbyClass}=landings

// Landings
routes.get('/astronomy/landings',hasLandingQuery, getLandingbyQuery);
routes.get('/astronomy/landings/mass/:mass', getLandingbyMass);
routes.get('/astronomy/landings/class/:recclass', getLandingbyClass);

//NEAs
routes.get('/astronomy/neas',getNEAsbyQuery);


module.exports = routes;