import { combineReducers } from "redux";
import priceReducer from "./price";
import quantityReducer from "./quantity";

const Reducers = combineReducers({
    priceReducer,
    quantityReducer
});

export default Reducers;
