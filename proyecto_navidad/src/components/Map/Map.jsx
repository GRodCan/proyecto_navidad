import React, {useEffect, useState} from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet"
import "./Map.css"
import useGetGeolocation from "../../hooks/useGetGeolocation"


const Map = ({info}) => {
   
  const icon =new Icon({
    iconUrl: '/meteorito.svg',
    iconSize: [10,10]
  })

  let geolocations= useGetGeolocation(info)
  
  return (
  <MapContainer center={[40,0]} zoom={4} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
      {geolocations.length>0?
      geolocations.map((position,i)=><Marker position={position} key={i} icon={icon}>
        <Popup >{`${info[0]}`}</Popup>
      </Marker>)
      :null} 
      
  </MapContainer>
)  ;
};

export default Map;
