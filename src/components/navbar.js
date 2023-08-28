import React from 'react';
import { Link } from "react-router-dom";

import '../style/navbar.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="items">
        <Link id="item" to="/">HOME</Link>
        <Link id="item" to="about">ABOUT</Link>
        <Link id="item" to="album">ALBUM</Link>
      </div>
    </div>
  );
}

export default Navbar;
