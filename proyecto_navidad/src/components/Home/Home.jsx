import axios from "axios";
import React, {useState,useEffect}from "react";
import useDate from "../../hooks/useDate";

const Home = () => {
  
  const [apod, setApod] = useState([])
  
  const tenDays= useDate(10)
  useEffect(async() => {
    
    const res_apod= await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SWi5A15HvhsyqyK84HXeanEpev5DgGgDuBdfC51C&start_date=${tenDays}`)
    const data_apod= res_apod.data
    console.log(data_apod);
    return setApod(data_apod)
      
  }, [])


  return <div>
    
    {apod.map((img,i)=><img src={img.url} alt={"Imagen "+i} key={i} />)}
  </div>;
};

export default Home;
