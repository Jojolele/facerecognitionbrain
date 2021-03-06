import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className=" center ma4 mt0">
      <Tilt
        className="br4 shadow-1"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="logo"></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
