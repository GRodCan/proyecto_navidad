const Landing=require('../models/landing');
const Neas=require('../models/neas');


//http://localhost:5000/api/astronomy/landings?minimum_mass=2000
//http://localhost:5000/api/astronomy/landings?from=1970
//http://localhost:5000/api/astronomy/landings?to=2000
//http://localhost:5000/api/astronomy/landings?from=1970&to=1990


const getLandingbyQuery = async (req,res) => {
    
    const {minimum_mass,to,from}= req.query
    let data;
    
    try{
        if(minimum_mass){
            data = await Landing.find({'mass':{$gte:minimum_mass}}, 'name mass -_id');            
            res.status(200).json(data);
        }if(to||from){ 
            to&&from?
            data = await Landing.find({$and:[
                                            {"year":{$gte:from}},
                                            {"year":{$lte:(to+1)}}
                                            ] //Se le suma 1 porque todas las fechas de los years son mayores que el año en el momento 00:00 1-enero.
                }, "name mass year -_id")
            :from? data = await Landing.find({"year":{$gte:from}}, "name mass year -_id")
            :data = await Landing.find({"year":{$lte:(to+1)}}, "name mass year -_id");
            res.status(200).json(data);
            }
    }catch(err){
        res.status(400).json({"error":err})
    } 
}


const getLandingbyMass = async (req,res) => {
    
    const {mass}= req.params
    let data;
    try{
        data = await Landing.find({"mass":mass}, "name mass -_id")
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({"error":err})
    } 
}
const getLandingbyClass = async (req,res) => {
    
    const {recclass}= req.params
    let data;
    try{
        data = await Landing.find({"recclass":recclass}, "name recclass -_id")
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({"error":err})
    } 
}

const apiControllers = {
    getLandingbyQuery,
    getLandingbyMass,
    getLandingbyClass
};
module.exports=apiControllers;