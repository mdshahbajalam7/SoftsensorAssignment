import Button from "@mui/material/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../components/Product.module.css";
import { CART_DATA_COUNT } from "../Redux/actiontype";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cartpage() {
  // call/ the data for localstorage here
  const dispatch = useDispatch();
  
  const [cartData, setCartData] = useState([]);
  console.log(cartData);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart_data")));
  }, []);

  const Remove = (index) => {
    const getdata = JSON.parse(localStorage.getItem("cart_data"));
    toast.error("Item Remove in cart !", {
      position: toast.POSITION.TOP_CENTER,
    });
    getdata.splice(index, 1);
    console.log(getdata);
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
      {/* Button for go back to product page */}

      <div className={styles.flexdiv}>
        <Button
          style={{ marginLeft: "30px"}}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>

      {/* localstorage data maping here */}

      <div className={styles.card_products}>
        {cartData.map((elem, index) => (
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
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cartpage;
