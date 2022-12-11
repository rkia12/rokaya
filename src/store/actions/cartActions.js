export const AddToCartAction = (_id, quantity = 1) => {
  return async (dispatch, getState) => {
    let product = getState().products.products.find(
      (product) => product.id == _id
    );
    let cartProducts = getState().cart.products;
    if (cartProducts.length > 0) {
      let isThere = false;
      cartProducts = cartProducts.map((pro) => {
        if (pro.id == _id) {
          isThere = true;
          return { ...pro, quantity: pro.quantity + quantity };
        }
        return pro;
      });
      if (!isThere) {
        product = { ...product, quantity: quantity };
        cartProducts = [...cartProducts, product];
      }
    } else {
      product = { ...product, quantity: quantity };
      cartProducts = [product];
    }
    dispatch({
      type: "ADD_TO_CART",
      products: cartProducts,
    });
  };
};

export const removeFromCartAction = (_id) => {
  return async (dispatch, getState) => {
    let product = getState().cart.products.find((product) => product.id == _id);

    if (product) {
      let products = getState().cart.products.filter((pro) => pro.id != _id);
      dispatch({
        type: "REMOVE_FROM_CART",
        products,
      });
    }
  };
};

export const changeQuantityAction = (quantity, _id) => {
  return async (dispatch, getState) => {
    let product = getState().cart.products.find((product) => product.id == _id);

    if (product) {
      let products = getState().cart.products;
      products = products.map((pro) => {
        if (pro.id == _id) {
          return { ...pro, quantity: quantity };
        }
        return pro;
      });
      dispatch({
        type: "CHANGE_QUANTITY",
        products,
      });
    }
  };
};

export const clearCartAction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
};
