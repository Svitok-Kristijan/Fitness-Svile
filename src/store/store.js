import {createStore} from "redux";
import reducer from "./card-reducer";

const store = createStore(reducer);

export default store;
