const routes = require('express').Router();
const cors= require("cors");
const landings= require("../controllers/landings")
const getNEAsbyQuery= require("../controllers/neas")
const hasQueryParams=require("../middlewares/hasQueryParams")
const {getLandingbyQuery,getLandingbyMass,getLandingbyClass}=landings

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Landings
routes.get('/astronomy/landings',cors(corsOptions),hasQueryParams, getLandingbyQuery);
routes.get('/astronomy/landings/mass/:mass',cors(corsOptions), getLandingbyMass);
routes.get('/astronomy/landings/class/:recclass',cors(corsOptions), getLandingbyClass);

//NEAs
routes.get('/astronomy/neas',cors(corsOptions),hasQueryParams,getNEAsbyQuery);


module.exports = routes;