import React, {useEffect} from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet"
import "./Map.css"


const Map = () => {

  const icon =new Icon({
    iconUrl: '/meteorito.svg',
    iconSize: [25,25]
  }) 

  const position = [51.505, -0.09]
  const position2 = [54.516, -3.09]
  const arrPositions= [position,position2]
  return (
  <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
      {arrPositions.map((position,i)=>
      <Marker position={position} key={i} icon={icon}>
        <Popup >{i}</Popup>
      </Marker>)}
      
  </MapContainer>
)  ;
};

export default Map;
