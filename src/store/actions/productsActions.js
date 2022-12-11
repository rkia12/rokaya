export const getAllProducts = (category = "") => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SET_TO_NULL",
    });
    await new Promise((resolve) => setTimeout(resolve, 2500));
    dispatch({
      type: "GET_PRODUCTS",
    });
  };
};

export const getProductsByCat = (category = "") => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SET_TO_NULL",
    });
    await new Promise((resolve) => setTimeout(resolve, 2500));
    if (category == "all") dispatch(getAllProducts());
    else
      dispatch({
        type: "GET_PRODUCTS_BY_CAT",
        category,
      });
  };
};

export const getProductById = (_id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SET_TO_NULL",
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: "GET_PRODUCT",
      _id,
    });
  };
};
