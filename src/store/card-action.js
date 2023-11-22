export const addToCart = (item, quantity) => ({
  type: "ADD_TO_CART",
  payload: {item, quantity},
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

export const updateQuantity = (itemId, updatedQuantity) => ({
  type: "UPDATE_QUANTITY",
  payload: {itemId, updatedQuantity},
});
