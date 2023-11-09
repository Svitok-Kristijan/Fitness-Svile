import React from "react";
import "./home.scss";
import appBackgroundPhoto from "../images/background.jpg";
import trainingPhoto from "../images/training.jpg";
import trainingPlanPhoto from "../images/trainingPlan.jpg";
import suplementsPhoto from "../images/suplements.jpg";
import weightPng from "../images/weight.png";
import heartPng from "../images/heart.png";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-container">
      <p className="App-Tittle">Fitness Svile</p>
      <img className="weight" src={weightPng} alt="weight" />
      <img className="heart" src={heartPng} alt="heart" />
      <div className="App-background">
        <img
          className="App-background-photo"
          src={appBackgroundPhoto}
          alt="background"
        />
        <div className="App-container">
          <Link to="/training" className="training-div">
            <img src={trainingPhoto} alt="training" />

            <p>Training</p>
          </Link>
          <Link to="/trainingPlan" className="second-div">
            <img src={trainingPlanPhoto} alt="training" />
            <p>Training Plan</p>
          </Link>
          <Link to="/suplements" className="suplement-div">
            <img src={suplementsPhoto} alt="training" />
            <p>Suplements</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
