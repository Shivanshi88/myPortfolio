import "./HeroimgStyle.css"; 
import React from 'react'
import OIP from "../assets/OIP.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
<img className="into-img" src={OIP} alt="OIP"/>
        </div>
        <div className="content">
         
            <h1>Web Developer</h1>
<div>
   <Link to="/project" className="btn"> Projets   </Link> 
   <Link to="/contact" className="btn btn-light"> CONTACT  </Link> 

</div>
        </div>
        </div>
  )
}

export default Heroimg;