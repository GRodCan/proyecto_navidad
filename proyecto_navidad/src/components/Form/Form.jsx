import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import useDate from "../../hooks/useDate";

const Form = ({type,setArr,classes, parent}) => {
  const single = useRef();
  const from = useRef();
  const to = useRef();
  
  
  const handleSubmit = async event => {
    event.preventDefault();
    const search = single.current.value
    let result
    type==="minimum_mass"?
    result= await axios.get(`http://localhost:5000/api/astronomy/landings?minimum_mass=${search}`)
    :
    result= await axios.get(`http://localhost:5000/api/astronomy/landings/mass/${search}`)

    console.log(result.data);
    setArr(result.data);

  }  
  const handleChange = async event => {
    event.preventDefault();
    const search = single.current.value 
    console.log("Clase:",search);
    let result
    parent==="landings"?
    result= await axios.get(`http://localhost:5000/api/astronomy/landings/class/${search}`):
    result= await axios.get(`http://localhost:5000/api/astronomy/neas?orbit_class=${search}`)
    setArr(result.data);    
  
  }

  const handleSubmit_date = async event => {
    event.preventDefault();

    const search_from = from.current.value 
    const search_to = to.current.value 
    const result= parent==="Landings"?
    await axios.get(`http://localhost:5000/api/astronomy/landings?from=${search_from}&to=${search_to}`):
    await axios.get(`http://localhost:5000/api/astronomy/neas?from=${search_from}&to=${search_to}`)
    const sorted=result.data.sort(function (a, b) {
      if (a.discovery_date > b.discovery_date) {
        return 1;
      }
      if (a.discovery_date < b.discovery_date) {
        return -1;
      }
      return 0;
    });
    
    
    setArr(sorted);
    
  }

  let today=useDate()

  return <>
{
  type==="date"?
  
<form onSubmit={handleSubmit_date}>
        <label htmlFor="from">Desde:</label><br/>
        <input type="date" id="from" name="from" ref={from} defaultValue="0800-01-01"
       min="0800-01-01"/><br />
        <label htmlFor="to">Hasta:</label><br/>
        <input type="date" name="to" id="to" ref={to} defaultValue={today}
       min="1400-01-01"/>
        <input type="submit"/><br />
</form>

:type==="class"?

<form onChange={handleChange}>
        <select id="class" name="class" ref={single}>
          {classes.map((element,i)=><option value={element} key={i}>{element}</option>)} 
        </select><br />
</form>

:

<form onSubmit={handleSubmit}>
        <input type="text" id="data" name="data" ref={single}/><br />
        <input type="submit"/><br />
</form>
}
</>;
};

export default Form;
