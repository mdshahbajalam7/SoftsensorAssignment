import Button from "@mui/material/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../components/Product.module.css";
import { CART_DATA_COUNT } from "../Redux/actiontype";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cartpage() {
  // call/ the data for localstorage here
  const dispatch = useDispatch();


  const {cartdatacount} = useSelector(state=>state)
  
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart_data")));
  }, []);

  const Remove = (index) => {
    toast.error("Item Remove in cart !", {
      position: toast.POSITION.TOP_CENTER,
    });
    const getdata = JSON.parse(localStorage.getItem("cart_data"));
    getdata.splice(index, 1);
    localStorage.setItem("cart_data", JSON.stringify(getdata));
    setCartData(getdata);
    dispatch({
      type: CART_DATA_COUNT,
    });
  };

  // navigate function here
  const navigate = useNavigate();

  return (
    <>
     <ToastContainer />
      {/* Button for go back to product page */}

      <div className={styles.flexdiv}>
        
        <Button
          style={{ marginLeft: "30px"}}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back To Home
        </Button>
      </div>

      {/* localstorage data maping here */}

      <div className={styles.card_products}>
        {cartdatacount==0  ? <h1>No Item in Cart..</h1> : cartData.map((elem, index) => (
          <div key={elem.id}>
            <div className={styles.map}>
              <h4 style={{ fontSize: "20px", fontFamily: "500" }}>
                Gender: {elem.category}
              </h4>
              <img className={styles.imgtag} src={elem.image} alt="" />
              <h3>{elem.title}</h3>
              <h3>Cost: {elem.price}</h3>

              {/* button for remove items in card page */}

              <Button
                style={{ background: "red" }}
                variant="contained"
                onClick={() => Remove(index)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cartpage;
