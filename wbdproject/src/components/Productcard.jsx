import React from "react";
import Button from "@mui/material/Button";
import styles from "../components/Product.module.css";
import { useDispatch } from "react-redux"; 
import { CART_DATA_COUNT } from "../Redux/actiontype";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Productcard(props) {
  // using in props
  const { category, image, price, title } = props;
  const dispatch = useDispatch();

  // add to cart function here
  const AddtoCart = (props) => {
    // this is all function store  data in loacalstorage...
    let cart_Data = JSON.parse(localStorage.getItem("cart_data")) || [];
    cart_Data.push(props);
    localStorage.setItem("cart_data", JSON.stringify(cart_Data));
    dispatch({
      type: CART_DATA_COUNT,
    });
    
    // toast here
    toast.success("Item add in Cart Successfully  !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <div className={styles.card_product}>
        {/* props data here */}

        <h4 style={{ fontSize: "20px", fontFamily: "500" }}>
          Gender: {category}
        </h4>
        <div className={styles.imagediv}>
        <img className={styles.imgtag} src={image} alt="imagephoto" />
        </div>
        <h3>{title}</h3>
        <h4>Cost: {price}</h4>

        {/* button for add to cart data */}

        <Button style={{background:"goldenrod"}} variant="contained" onClick={() => AddtoCart(props)}>
          Add To Cart
        </Button>
        <ToastContainer />
      </div>
     
    </>
  );
}

export default Productcard;
