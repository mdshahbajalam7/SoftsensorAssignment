import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  
  const {cartdatacount} = useSelector(state=>state)
  const navigate = useNavigate()

  return (
    <div className={styles.navbar}>
      <h3 onClick={()=>navigate("/")}>Fresh Stock</h3>
      <Link
        style={{
          marginTop: "10px",
          fontSize: "30px",
          fontFamily: "500px",
          textDecoration: "none",
          color: "white",
        }}
        to="/Cart"
      >
        cart_{cartdatacount}
      </Link>
    </div>
  );
}

export default Navbar;
