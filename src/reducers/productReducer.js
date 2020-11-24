import axios from "axios";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await axios.get(
      "https://fakestoreapi.com/products?limit=6"
    );
    if (products) {
      dispatch({
        type: "INIT_PRODUCTS",
        data: products.data,
      });
    }
  };
};

export default productReducer;
