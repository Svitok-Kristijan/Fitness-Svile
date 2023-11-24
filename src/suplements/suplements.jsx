import React, {useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase.utils";
import "./suplements.scss";
import supPng from "../images/suplements.png";
import backPng from "../images/backPng.png";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {updateQuantity, addToCart} from "../store/card-action";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Suplements = ({shoppingCart, updateQuantity, addToCart}) => {
  const [suplementsData, setSuplementsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleBuyNowClick = (item) => {
    const itemWithSource = {
      ...item,
      source: "Suplements",
    };

    if (shoppingCart) {
      const existingItem = shoppingCart.find(
        (cartItem) => cartItem.id === itemWithSource.id
      );

      if (existingItem) {
        updateQuantity(itemWithSource.id, existingItem.quantity + 1);
        toast.success(
          `${itemWithSource.name} has been added to your shopping bag!`,
          {
            autoClose: 2000,
          }
        );
      } else {
        addToCart(itemWithSource, 1);
        toast.success(
          `${itemWithSource.name} has been added to your shopping bag!`,
          {
            autoClose: 2000,
          }
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoriesAndDocuments();
        setSuplementsData(data);
      } catch (error) {
        console.error("Error fetching suplements data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Clicked category:", category);
  };

  const filteredSuplementsData =
    selectedCategory === "All"
      ? suplementsData
      : suplementsData.filter(
          (category) => category.title === selectedCategory
        );

  return (
    <div className="suplements-container">
      <ToastContainer />
      <img className="back-png" src={backPng} alt="back" onClick={goBack} />
      <div className="background">
        <img src={supPng} alt="suplement" />
      </div>
      <div className="title">
        <h1>Suplements</h1>
      </div>
      <div className="filter-categories">
        <span onClick={() => handleCategoryClick("All")}>All</span>
        <span onClick={() => handleCategoryClick("Whey")}>Whey</span>
        <span onClick={() => handleCategoryClick("Creatine")}>Creatine</span>
        <span onClick={() => handleCategoryClick("Amino")}>Amino</span>
        <span onClick={() => handleCategoryClick("Tablets")}>Tablets</span>
      </div>
      <div className="suplements-list">
        {filteredSuplementsData.map((category) => (
          <div className="suplements" key={category.id}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.id}>
                  <p className="name"> {item.name}</p>
                  <img src={item.picture} alt={item.sortOrder} />
                  <button onClick={() => handleBuyNowClick(item)}>
                    BUY NOW
                  </button>
                  <p className="price"> €{item.price}</p>
                  <p> {item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});
export default connect(mapStateToProps, {addToCart, updateQuantity})(
  Suplements
);
