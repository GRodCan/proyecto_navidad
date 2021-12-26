import React, {useEffect} from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet"
import "./Map.css"
import { CSSProperties } from "react";
const Map = () => {
  const position = [51.505, -0.09]
  const position2 = [51.516, -0.09]
  const arrPositions= [position,position2]
  return (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={position}> */}
      {arrPositions.map((position,i)=>
      <Marker position={position}>
        <Popup>{i}</Popup>
      </Marker>)}
      {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
    {/* </Marker> */}
  </MapContainer>
)  ;
};

export default Map;
