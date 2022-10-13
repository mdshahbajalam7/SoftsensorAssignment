import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/Product.module.css";

function Cartpage() {
  const getdata = JSON.parse(localStorage.getItem("cart_data"));
  //   console.log(getdata);
  const Remove = (index) => {
    const getdata = JSON.parse(localStorage.getItem("cart_data"));
    let removedata = getdata.splice(index, 1);
    console.log(removedata);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.flexdiv}>
        <Button
          style={{ marginLeft: "30px" }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
      <div className={styles.card_products}>
        {getdata.map((elem) => (
          <>
            <div key={elem.id}>
              <h4 style={{ fontSize: "20px", fontFamily: "500" }}>
                Gender: {elem.category}
              </h4>
              <img className={styles.imgtag} src={elem.image} alt="" />
              <h3>{elem.title}</h3>
              <h3>Cost: {elem.price}</h3>
              <Button
                style={{ marginLeft: "30px" }}
                variant="contained"
                onClick={(index)=>Remove(index)}
              >
                Remove
              </Button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Cartpage;
