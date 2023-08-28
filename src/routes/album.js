import React from "react";

import "../style/album.scss";

import { ReactComponent as TopLogo } from "../assets/icons/toplogo.svg";

import albums from "../data/albums.json";

const Album = () => {
  return (
    <div id="page" className="album">
      <div id="section" className="index">
        <TopLogo id="toplogo" />
        <p id="title">ALBUM LIST</p>
        <div id="list">
          {albums.map((item, index) => (
            <a href={item.link} rel="noreferrer" target="_blank">
              <div id="album" key={index} style={
                { backgroundImage: `url(/images/albums/${item.cover})` }
              }/ >
            </a>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Album;
