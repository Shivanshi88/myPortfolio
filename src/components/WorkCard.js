import "./WorkCardStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={`${props.title} screenshot`} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// PropType validation
WorkCard.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default WorkCard;
