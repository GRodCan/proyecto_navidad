import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import useDate from "../../hooks/useDate";
import NEA from "../NEA/NEA";
import Form from "../Form/Form";

const NEAs = () => {
  const [NEAs, setNEAs] = useState([])
  const [orbit_classes, setOrbit_classes] = useState([])
  const [search, setSearch] = useState("")

  const orbit_class= useRef();
  const from = useRef();
  const to = useRef();
    
    const search_type = useRef();

 useEffect(async() => {
    const result= await axios.get("http://localhost:5000/api/astronomy/neas?from=0");
    setNEAs(result.data);
    
    const result_class= result.data.map(element=>element.orbit_class)
    const arr_Classes=result_class.filter((element, i,arr) => {
     return arr.indexOf(element) === i;
   });
   const arr_Classes_filter=arr_Classes.filter((element, i,arr) => {
     return !element.includes("/")
   });
   setOrbit_classes(arr_Classes_filter.sort());
}, [])



  const handleChange_class = async event => {
    event.preventDefault();
    const search = orbit_class.current.value 
    const result= await axios.get(`http://localhost:5000/api/astronomy/neas?orbit_class=${search}`);
    setNEAs(result.data);    
  
  }

  const handleSubmit_date = async event => {
    event.preventDefault();
    const search_from = from.current.value 
    const search_to = to.current.value 
    const result= await axios.get(`http://localhost:5000/api/astronomy/neas?from=${search_from}&to=${search_to}`);
    const sorted=result.data.sort(function (a, b) {
      if (a.discovery_date > b.discovery_date) {
        return 1;
      }
      if (a.discovery_date < b.discovery_date) {
        return -1;
      }
      return 0;
    });

    
    setNEAs(sorted);
    
  }

  let today=useDate()
  const handleChange = async event => {
    event.preventDefault();
    const type = search_type.current.value 
    setSearch(type);    
  
  }

  return <>

  
  <form onChange={handleChange}>
      <select name="search" id="search" ref={search_type} >
        <option value="">Filtrar</option>
        <option value="class">Por Clase de Órbita</option>
        <option value="date">Por Fecha</option>
      </select></form>
    {search.length>0?<Form type={search} setArr={setNEAs} classes={orbit_classes} parent="NEAs"/>:null }

  {NEAs.map((element,i)=><NEA NEA={element} key={i}/>)}
  </>;
};

export default NEAs;
