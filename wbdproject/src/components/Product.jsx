import React from "react";
import { useEffect } from "react";
import Productcard from "./Productcard";
import styles from "../components/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/action";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

function Product() {
  
  // product data calling reducer
  const { Productsdata, isLoading, isError } = useSelector((state) => state);

  //   dispatch function here
  const dispatch = useDispatch();
  
  // const fetchMoreData = () => {
  //   // MAKING API CALL AND FUNCTION CALL
  //  setTimeout(() => {
  //   Productsdata(Productsdata.concat(getdata(dispatch)))
  //  }, 3000);
  // };
  useEffect(() => {
    //   product data callling in action
    getdata(dispatch);
  }, [dispatch]);
  return (
    // products Map here
    <div className={styles.container}>
      {/* <InfiniteScroll
        dataLength={Productsdata.length}
        next={fetchMoreData}
        hasMore={isLoading}
        loader={<p>loading...</p>}
      > */}
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>
            {" "}
            <CircularProgress color="success" />
          </h1>
        ) : isError ? (
          <h1>Error while fatching data</h1>
        ) : (
          Productsdata.map((elem) => {
            return <Productcard key={elem.id} {...elem} />;
          })
        )}
      {/* </InfiniteScroll> */}
    </div>
  );
}

export default Product;
