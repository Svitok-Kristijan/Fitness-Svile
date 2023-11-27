import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Home from "./home/home";
import Training from "./training/training";
import Navbar from "./navbar/navbar";
import Arm from "./training/arm/arm";
import Shoulder from "./training/shoulder/shoulder";
import Back from "./training/back/back";
import Chest from "./training/chest/chest";
import Stomach from "./training/stomach/stomach";
import Legs from "./training/legs/legs";
import BuyTraining from "./buyTraining/buyTraining";
import Suplements from "./suplements/suplements";
import ShopingBag from "./shoppingBag/shopingBag";
import Checkout from "./checkout/checkout";

const TrainingLayout = ({children}) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/training"
            element={
              <TrainingLayout>
                <Training />
              </TrainingLayout>
            }
          />
          <Route
            path="/arm"
            element={
              <TrainingLayout>
                <Arm />
              </TrainingLayout>
            }
          />
          <Route
            path="/shoulder"
            element={
              <TrainingLayout>
                <Shoulder />
              </TrainingLayout>
            }
          />
          <Route
            path="/back"
            element={
              <TrainingLayout>
                <Back />
              </TrainingLayout>
            }
          />
          <Route
            path="/chest"
            element={
              <TrainingLayout>
                <Chest />
              </TrainingLayout>
            }
          />
          <Route
            path="/stomack"
            element={
              <TrainingLayout>
                <Stomach />
              </TrainingLayout>
            }
          />
          <Route
            path="/legs"
            element={
              <TrainingLayout>
                <Legs />
              </TrainingLayout>
            }
          />
          <Route
            path="/trainingPlan"
            element={
              <div>
                <ShopingBag />
                <BuyTraining />
              </div>
            }
          />
          <Route
            path="/suplements"
            element={
              <div>
                <ShopingBag />
                <Suplements />
              </div>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
