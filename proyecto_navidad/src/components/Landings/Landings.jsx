import React, { useEffect, useState, useRef } from "react";

import "./Landings.css"
import Map from "../Map/Map";
import axios from "axios";
import Form from "../Form/Form";

const Landings = () => {
   const [landings, setLandings] = useState([])
   const [classes, setClasses] = useState([])
   const [search, setSearch] = useState("")
    
    const search_type = useRef();

   useEffect(async() => {
       const result= await axios.get("http://localhost:5000/api/astronomy/landings?minimum_mass=0");
       setLandings(result.data);
       const result_class= result.data.map(element=>element.recclass)
       const arr_Classes=result_class.filter((element, i,arr) => {
        return arr.indexOf(element) === i;
      });
      const arr_Classes_filter=arr_Classes.filter((element, i,arr) => {
        return !element.includes("/")
      });
      setClasses(arr_Classes_filter.sort());
   }, [])
    
    const handleChange = async event => {
    event.preventDefault();
    const type = search_type.current.value 
    console.log("Clase:",type);
    setSearch(type);    
  
  }


   return(
   <div>
     <form onChange={handleChange}>
      <select name="search" id="search" ref={search_type} >
        <option value="">Filtrar</option>
        <option value="minimum_mass">Por Masa Mínima</option>
        <option value="mass">Por Masa Exacta</option>
        <option value="class">Por Clase de asteroide</option>
        <option value="date">Por Fecha</option>
      </select></form>
    {search.length>0?<Form type={search} setArr={setLandings} classes={classes} parent="Landings"/>:null }

    <Map info={landings}/>
    </div>);
};

export default Landings;
