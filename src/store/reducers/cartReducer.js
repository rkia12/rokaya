const initState = {
  products: JSON.parse(localStorage.getItem("products") || "[]"),
  loaded: false,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CART_INFO":
      return { ...initState, loaded: false };
    case "ADD_TO_CART":
      localStorage.setItem("products", JSON.stringify(action.products));
      return {
        ...initState,
        products: action.products,
      };
    case "REMOVE_FROM_CART":
    case "CHANGE_QUANTITY":
      localStorage.setItem("products", JSON.stringify(action.products));
      return {
        ...initState,
        products: action.products,
      };

    case "CLEAR_CART":
      localStorage.setItem("products", JSON.stringify([]));
      return {
        ...initState,
        products: [],
      };
    default:
      return state;
  }
};
export default CartReducer;
