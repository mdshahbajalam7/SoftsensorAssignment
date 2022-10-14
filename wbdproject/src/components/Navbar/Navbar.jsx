import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  
  const {cartdatacount} = useSelector(state=>state)

  return (
    <div className={styles.navbar}>
      <h3>Fresh Stock</h3>
      <Link
        style={{
          marginTop: "10px",
          fontSize: "25px",
          fontFamily: "500px",
          textDecoration: "none",
          color: "white",
        }}
        to="/cart/:id"
      >
        cart_{cartdatacount}
      </Link>
    </div>
  );
}

export default Navbar;
