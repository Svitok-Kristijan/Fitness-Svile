import React from "react";
import {connect} from "react-redux";
import "./checkout.scss";
import {updateQuantity, removeFromCart} from "../store/card-action";
import backPng from "../images/backPng.png";
import {useNavigate} from "react-router-dom";

const Checkout = ({shoppingCart, removeFromCart, updateQuantity}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleIncrement = (item) => {
    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1);
    } else {
      updateQuantity(item.id, 1);
    }
  };

  const handleDecrement = (item) => {
    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem && existingItem.quantity > 1) {
      updateQuantity(item.id, existingItem.quantity - 1);
    } else if (existingItem && existingItem.quantity === 1) {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="checkout-container">
      <img className="back-png" src={backPng} alt="back" onClick={goBack} />
      <div className="checkout">
        <h1>Checkout</h1>
        {shoppingCart && shoppingCart.length > 0 ? (
          <ul>
            {shoppingCart.map((item) => (
              <li key={item.id}>
                <div className="item-container">
                  <img src={item.picture} alt={item.name} />

                  <p className="name">{item.name} &#174;</p>
                  <div className="quantity-container">
                    <button onClick={() => handleDecrement(item)}>
                      &#8249;
                    </button>
                    <p className="quantity"> {item.quantity}</p>
                    <button onClick={() => handleIncrement(item)}>
                      &#8250;
                    </button>
                  </div>
                </div>
              </li>
            ))}
            <span className="total-price">
              Total Price: €{calculateTotalPrice(shoppingCart)}
            </span>
          </ul>
        ) : (
          <p>No items in the shopping bag.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = {
  removeFromCart,
  updateQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const calculateTotalPrice = (cart) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};
