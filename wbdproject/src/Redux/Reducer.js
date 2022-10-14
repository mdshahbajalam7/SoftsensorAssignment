import { CART_DATA_COUNT, GETDATA, GET_DATA_ERR, GET_DATA_LOADING } from "./actiontype";

const initalstates = {
  Productsdata: [],
  isLoading: false,
  isError: false,
  cartdatacount : JSON.parse(localStorage.getItem("cart_data")).length || 0
};

export const Reducer = (state = initalstates, { type, payload }) => {
  switch (type) {
    case GET_DATA_ERR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GETDATA: {
      console.log("payload", payload);
      return {
        ...state,
        Productsdata: payload,
        isLoading: false,
        isError: false,
      };
    }

    case CART_DATA_COUNT: {
        let count = JSON.parse(localStorage.getItem("cart_data"))
        return {
          ...state,
          cartdatacount:count.length
        };
      }
    default:
      return state;
  }
};
