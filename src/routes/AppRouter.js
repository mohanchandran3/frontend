import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "../pages/productListingPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import AddProductPage from "../pages/addProductPage"; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;