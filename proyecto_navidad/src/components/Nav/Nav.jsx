import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/landing">Asteroides</Link></li>
    <li><Link to="/neas">NEAs</Link></li>
    
  </ul>
</nav>;
};

export default Nav;
