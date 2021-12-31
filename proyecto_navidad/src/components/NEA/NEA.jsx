import React from "react";

const NEA = ({NEA}) => {
  const {designation, discovery_date, orbit_class}=NEA;
  return <div>
    <h4>Designación: {designation}</h4>
    <p>Descubierto el: {discovery_date.split("T")[0]}</p>
    <p>Tipo de orbita: {orbit_class}</p>
  </div>;
};

export default NEA;
