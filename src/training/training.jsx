import React from "react";
import "./training.scss";
import trainingPhoto from "../images/trainingPhoto.jpg";
import {Link} from "react-router-dom";

const Training = () => {
  return (
    <div className="training-container">
      <div className="training">
        <h3>Training</h3>
        <p>
          Try our best body exercises for your best performance and to become a
          better version of yourself.<br></br>For your maximum effectiveness,
          purchase our training plan.
        </p>
        <Link to="/trainingPlan" className="training-plan">
          Buy training plan
        </Link>
        <div className="training-image">
          <img src={trainingPhoto} alt="trainingPhoto" />
        </div>
      </div>
      <div className="link-container">
        <Link to="/arm" className="link">
          Arm
        </Link>
        <Link to="/shoulder" className="link">
          Shoulder
        </Link>
        <Link to="/back" className="link">
          Back
        </Link>
        <Link to="/chest" className="link">
          Chest
        </Link>
        <Link className="link">Stomack</Link>
        <Link className="link">Legs</Link>
      </div>
    </div>
  );
};

export default Training;
