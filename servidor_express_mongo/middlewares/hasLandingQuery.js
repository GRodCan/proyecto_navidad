const hasLandingQuery = (req, res, next) => {

    if (req.query.minimum_mass || (req.query.to||req.query.from)) {
        next();
    }
    else {
        const data = {
            message: "Petición imcompleta, no se han encontrado query params necesarios",
            error: 400
        }
        res.status(400).json( data );
    }
}
module.exports = hasLandingQuery