import React from "react";
import "./buyTraining.scss";
import backPng from "../images/backPng.png";
import {useNavigate} from "react-router-dom";

const BuyTraining = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="buyTraining-container">
      <img className="back-png" src={backPng} alt="back" onClick={goBack} />
      <div className="plan-container">
        <div className="basic-plan">
          <h2>Basic</h2>
          <p className="last-price">70 €</p>
          <p className="price">
            49 € <p>/month</p>
          </p>
          <button>BUY NOW</button>
          <div className="description">
            <span>✔️ 3 training sessions per week.</span>
            <span>✔️ Over 100 exercises.</span>
            <span>✔️ 2 sessions per week with a trainer.</span>
            <span>✔️ 3 nutrition programs.</span>
          </div>
        </div>
        <div className="standard-plan">
          <h2>Standard</h2>
          <div className="standard">
            <p className="last-price">150 €</p>
            <p className="price">
              99 € <p>/month</p>
            </p>
            <button>BUY NOW</button>
            <div className="description">
              <span>✔️ 5 training sessions per week.</span>
              <span>✔️ Over 300 exercises.</span>
              <span>✔️ 5 sessions per week with a trainer.</span>
              <span>✔️ 5 nutrition programs.</span>
              <span>✔️ Online training with trainer.</span>
            </div>
          </div>
        </div>
        <div className="premium-plan">
          <h2>Premium</h2>
          <p className="last-price">200 €</p>
          <p className="price">
            149 € <p>/month</p>
          </p>
          <button>BUY NOW</button>
          <div className="description">
            <span>✔️ 7 training sessions per week.</span>
            <span>✔️ Over 600 exercises.</span>
            <span>✔️ 7 sessions per week with a trainer.</span>
            <span>✔️ 10 nutrition programs.</span>
          </div>
        </div>
      </div>
      <div className="buyTraining"></div>
    </div>
  );
};

export default BuyTraining;
