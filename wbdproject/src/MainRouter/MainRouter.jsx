import React from "react";
import { Route, Routes } from "react-router-dom";
import Cartpage from "../components/Cartpage";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product";

function MainRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Cart" element={<Cartpage />} />
      </Routes>
    </>
  );
}

export default MainRouter;
