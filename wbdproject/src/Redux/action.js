import axios from "axios";
import { BaseUrl } from "../App";
import { GETDATA, GET_DATA_ERR, GET_DATA_LOADING } from "./actiontype";

export const getdata = (dispatch) => {
    dispatch({
        type:GET_DATA_LOADING,
      })

  axios
    .get(`${BaseUrl}/products`)
    .then(({ data }) => {
      console.log("dataget", data);
     setTimeout(() => {
        dispatch({
            type:GETDATA,
            payload:data,
          })
     }, 1000);
    })
    .catch((err) => {
        dispatch({
            type:GET_DATA_ERR,
          })
    
    });
};
