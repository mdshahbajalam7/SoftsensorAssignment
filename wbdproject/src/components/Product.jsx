import React from "react";
import { useEffect } from "react";
import Productcard from "./Productcard";
import styles from "../components/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../App";

function Product() {
  const [datasource, setdatasource] = useState([]);
  const [nextSet, setnextSet] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const [Alldata, setAlldata] = useState([]);
  const handleBottomtoTop = () => {
    // window.scrollTo("Top")
  };

  // product data calling reducer
  const { Productsdata, isLoading, isError } = useSelector((state) => state);

  //   dispatch function here
  const dispatch = useDispatch();

  const fetchMoreData = () => {
    // MAKING API CALL AND FUNCTION CALL

    let remainingSet = Alldata.slice((nextSet - 1) * 3, nextSet * 3);
    if (remainingSet) {
      setTimeout(() => {
        setdatasource(datasource.concat(remainingSet));
        setHasmore(true);
        setnextSet(nextSet + 1);
      }, 2000);
    } else {
      setHasmore(false);
    }
  };
  useEffect(() => {
    // getdata(dispatch);
    axios
      .get(`${BaseUrl}/products`)
      .then(({ data }) => {
        console.log("dataget", data);
        setAlldata(data);
        let remainingSet = data.slice((nextSet - 1) * 3, nextSet * 3);
        setdatasource(datasource.concat(remainingSet));
        setnextSet(nextSet + 1);
        setHasmore(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // products Map here
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={datasource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <h1 style={{ textAlign: "center" }}>
            <CircularProgress color="success" />
          </h1>
        }
        endMessage={<p>skdjfkjsd</p>}
        // endMessage={<p>To Much data !</p>}
      >
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>
            {" "}
            <CircularProgress color="success" />
          </h1>
        ) : isError ? (
          <h1>Error while fatching data</h1>
        ) : (
          datasource.map((elem) => {
            return <Productcard key={elem.id} {...elem} />;
          })
        )}
      </InfiniteScroll>
      {/* <div style={{ width: "30%", marginLeft: "65%", marginBottom: "30px" }}>
        <button onClick={handleBottomtoTop} className={styles.topbutton}>
          Top
        </button>
      </div> */}
    </div>
  );
}

export default Product;
