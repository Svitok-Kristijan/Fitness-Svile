import React, {useEffect} from "react";
import "./home.scss";

import trainingPhoto from "../images/training.jpg";
import trainingPlanPhoto from "../images/trainingPlan.jpg";
import suplementsPhoto from "../images/suplements.jpg";
import weightPng from "../images/bars.png";

import {Link} from "react-router-dom";
//import {addCollectionAndDocuments} from "../utils/firebase.utils";
//import SUPPLEMENTS_DATA from "../suplements";

const Home = () => {
  /*useEffect(() => {
    console.log("Calling addCollectionAndDocuments");
    addCollectionAndDocuments("suplements", SUPPLEMENTS_DATA);
  }, []);*/
  return (
    <div className="Home-container">
      <img className="weight" src={weightPng} alt="weight" />

      <div className="background-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="App-background">
        <div className="App-Tittle-container">
          <p className="App-Tittle">Fitness Svile</p>
        </div>
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
