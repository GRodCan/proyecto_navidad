const NEAs=require('../models/neas');


//http://localhost:5000/api/astronomy/
//http://localhost:5000/api/astronomy/
//http://localhost:5000/api/astronomy/
//http://localhost:5000/api/astronomy/


const getNEAsbyQuery = async (req,res) => {
    
    const {orbit_class,to,from}= req.query
    let data;
    
    try{
        if(orbit_class){
            data = await NEAs.find({'orbit_class':orbit_class}, 'designation period_yr -_id');            
            res.status(200).json(data);
        }
        if(to||from){ 
            
            to&&from?
            data = await NEAs.find({$and:[
                                            {"discovery_date":{$gte:from}},
                                            {"discovery_date":{$lte:(to+1)}}
                                            ] //Se le suma 1 porque todas las fechas de los years son mayores que el año en el momento 00:00 1-enero.
                }, "designation period_yr discovery_date -_id")
            :from? data = await NEAs.find({"discovery_date":{$gte:from}}, "designation period_yr discovery_date -_id")
            :data = await NEAs.find({"discovery_date":{$lte:(to+1)}}, "designation period_yr discovery_date -_id");
            res.status(200).json(data);
            }
    }catch(err){
        res.status(400).json({"error":err})
    } 
}





module.exports=getNEAsbyQuery;