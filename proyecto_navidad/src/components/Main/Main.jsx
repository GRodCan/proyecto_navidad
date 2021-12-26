import React from "react";
import { Route,Routes } from 'react-router-dom';

import Home from "../Home";
import Landings from "../Landings";
import NEAs from "../NEAs";

const Main = () => {
  
  return (
<main>
  <Routes>
               <Route path="/" element={<Home/>} exact />
               <Route path="/landing" element={<Landings/>} />
               <Route path="/neas" element={<NEAs/>} />
               
  </Routes>
</main>);
};

export default Main;
