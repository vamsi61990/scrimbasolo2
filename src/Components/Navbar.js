import React from "react";
import logo from "../Images/Globes.png"

const Navbar=() =>{
  return(
    <nav className="navi">
      <img src={logo} className="nav--img"/>
      <p className="nav--text">my travel journal.</p>
    </nav>
  )
}
export default Navbar