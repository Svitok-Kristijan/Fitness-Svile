import {TOGGLE_SHOPPING_BAG} from "./actionTypes";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOPPING_BAG:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
