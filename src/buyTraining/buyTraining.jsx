import React from "react";
import "./buyTraining.scss";
import backPng from "../images/backPng.png";
import {useNavigate} from "react-router-dom";
import {updateQuantity, addToCart} from "../store/card-action";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyTraining = ({shoppingCart, updateQuantity, addToCart}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleBuyNowClick = (id, planName, price) => {
    const item = {
      id: id,
      itemName: `${planName} Training Plan`,
      price: price,
      source: "BuyTraining",
    };

    if (shoppingCart) {
      const existingItem = shoppingCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        toast.error(
          `${item.itemName} has been already added to your shopping bag!`,
          {
            autoClose: 2000,
          }
        );
      } else {
        addToCart(item, 1);
        toast.success(`${item.itemName} has been added to your shopping bag!`, {
          autoClose: 2000,
        });
      }
    }
  };
  return (
    <div className="buyTraining-container">
      <ToastContainer />
      <img className="back-png" src={backPng} alt="back" onClick={goBack} />
      <div className="plan-container">
        <div className="basic-plan">
          <h2>Basic</h2>
          <p className="last-price">70 €</p>
          <p className="price">
            49 € <p>/month</p>
          </p>
          <button onClick={() => handleBuyNowClick(1, "Basic", 49)}>
            BUY NOW
          </button>
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
            <button onClick={() => handleBuyNowClick(2, "Standard", 99)}>
              BUY NOW
            </button>
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
          <button onClick={() => handleBuyNowClick(3, "Premium", 149)}>
            BUY NOW
          </button>
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

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});
export default connect(mapStateToProps, {addToCart, updateQuantity})(
  BuyTraining
);
