import React from "react";
import Button from "@mui/material/Button";
import styles from "../components/Product.module.css";

function Productcard(props) {
  const { category, image, price, title } = props;

  const AddtoCart = (props) => {
    let cart_Data = JSON.parse(localStorage.getItem("cart_data")) || [];
    cart_Data.push(props);
    localStorage.setItem("cart_data", JSON.stringify(cart_Data));
  };
  return (
    <div className={styles.card_product}>
      <h4 style={{ fontSize: "20px", fontFamily: "500" }}>
        Gender: {category}
      </h4>
      <img className={styles.imgtag} src={image} alt="imagephoto" />
      <h3>{title}</h3>
      {/* <h4>{description}</h4> */}
      <h4>Cost: {price}</h4>
      <Button variant="contained" onClick={() => AddtoCart(props)}>
        Add To Cart
      </Button>
    </div>
  );
}

export default Productcard;
