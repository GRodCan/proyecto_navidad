import React, { useEffect, useState } from "react";

import "./Landings.css"
import Map from "../Map/Map";
import axios from "axios";

const Landings = () => {
   const [landings, setLandings] = useState([])

   useEffect(async() => {
       const result= await axios.get("http://localhost:5000/api/astronomy/landings?minimum_mass=0");
       setLandings(result.data);
       
   }, [])
       
   return(
   <div id="map">
    <Map info={landings}/>
    </div>);
};

export default Landings;
