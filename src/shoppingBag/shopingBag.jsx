import React, {useState} from "react";
import "./shopingBag.scss";
import {useNavigate} from "react-router-dom";
import shopingBagPng from "../images/shopingCard.png";
import {connect} from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  toggleShoppingBag,
} from "../store/card-action";

const ShopingBag = ({
  isOpen,
  toggleShoppingBag,
  shoppingCart,
  removeFromCart,
  updateQuantity,
}) => {
  const toggleOpen = () => {
    toggleShoppingBag();
  };

  const navigate = useNavigate();

  const navigation = () => {
    navigate("/checkout", {state: {shoppingCart}});
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
    <div className="shopingBag-container">
      <img onClick={toggleOpen} src={shopingBagPng} alt="shoping" />
      {isOpen && (
        <div className="item-container">
          {shoppingCart.length > 0 ? (
            shoppingCart.map((item) => (
              <div className="item" key={item.id}>
                {item.source === "Suplements" && (
                  <>
                    <img src={item.picture} alt="picSuplements" />
                    <p className="name">{item.name.slice(0, 15)}</p>
                  </>
                )}
                {item.itemName && (
                  <>
                    <p className="name-training">
                      {item.source === "Buy Training"
                        ? item.itemName
                        : item.itemName.slice(0, 30)}
                    </p>

                    <span className="price-training">
                      {item.price.toFixed(2)} €
                    </span>
                  </>
                )}
                {item.source === "Suplements" && (
                  <div className="quantity-container">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <p className="quantity"> {item.quantity}</p>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>Your shopping bag is empty.</p>
          )}
          {shoppingCart.length > 0 && (
            <div className="price-container">
              <p className="total-price">
                Total Price: €{calculateTotalPrice(shoppingCart)}
              </p>
              <button onClick={navigation}>Go to Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
  isOpen: state.isOpen,
});

const mapDispatchToProps = {
  removeFromCart,
  updateQuantity,
  toggleShoppingBag,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingBag);

const calculateTotalPrice = (cart) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};
