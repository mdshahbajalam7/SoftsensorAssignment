import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  const getdata = JSON.parse(localStorage.getItem("cart_data"));
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
        cart_{!getdata ? 0 : getdata.length}
      </Link>
    </div>
  );
}

export default Navbar;
