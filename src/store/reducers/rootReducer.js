import { combineReducers } from "redux";
import ProductsReducer from "./productsReducer";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

export default rootReducer;
