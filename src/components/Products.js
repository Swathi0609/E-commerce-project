import React from "react";
import { popularProducts } from "./data";
import Product from "./Product";
import "./Products.css";

function Products(props) {
  return (
    <div className="Products_container">
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
}
export default Products;
