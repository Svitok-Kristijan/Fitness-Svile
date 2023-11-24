const initialState = {
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
  totalPrice: 0,
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const {item, quantity} = action.payload;
      const itemTotalPrice = item.price * quantity;
      const newStateAddToCart = {
        ...state,
        shoppingCart: [...state.shoppingCart, {...item, quantity}],
        totalPrice: state.totalPrice + itemTotalPrice,
      };
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify(newStateAddToCart.shoppingCart)
      );
      return newStateAddToCart;

    case "REMOVE_FROM_CART":
      const newStateRemoveFromCart = {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (item) => item.id !== action.payload
        ),
      };
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify(newStateRemoveFromCart.shoppingCart)
      );
      return newStateRemoveFromCart;

    case "UPDATE_QUANTITY":
      const {itemId, updatedQuantity} = action.payload;
      const newStateUpdateQuantity = {
        ...state,
        shoppingCart: state.shoppingCart.map((item) =>
          item.id === itemId ? {...item, quantity: updatedQuantity} : item
        ),
      };
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify(newStateUpdateQuantity.shoppingCart)
      );
      return newStateUpdateQuantity;

    case "TOGGLE_SHOPPING_BAG":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
