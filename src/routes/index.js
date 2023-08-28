import React from "react";

import "../style/index.scss";

import { ReactComponent as Logo } from "../assets/logo.svg";

const Index = () => {
  return (
    <div id="page" className="index">
      <div id="character" />
      <Logo id="logo" />
    </div>
  )
};

export default Index;
