import React from "react";
import "./navbar.scss";
import weight from "../images/weight.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <img src={weight} alt="weight" />
      <p onClick={navigation}>Fitness Svile</p>
      <div className="navbar">
        <Link className="buy-training" to="/trainingPlan">
          Buy Training Now
        </Link>
        <Link className="buy-suplements" to="/suplements">
          Buy Suplements Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
