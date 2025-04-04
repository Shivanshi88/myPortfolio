import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react';
import { NavLink } from "react-router-dom";
import pro1 from "../assets/pro1.png"; // Adjust path if needed



const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> Project</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
         
        </div>
    </div>
  )
}

export default Work;