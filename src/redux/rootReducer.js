import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productsReducer from "./Products/productsReducer";
const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState:cartReducer
});
export default rootReducer;
