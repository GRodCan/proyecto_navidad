const hasQueryParams = (req, res, next) => {

    if ((req.query.minimum_mass||req.query.orbit_class) || (req.query.to||req.query.from)) {
        next();
    }
    else {
        const data = {
            message: "Petición incompleta, no se han encontrado query params necesarios",
            error: 400
        }
        res.status(400).json( data );
    }
}
module.exports = hasQueryParams