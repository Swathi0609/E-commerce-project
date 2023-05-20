import React from "react";
import { popularProducts } from "../components/data";
import Product from "./Product";

export default function Products() {
  return (
    <div className="Products_container">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}
