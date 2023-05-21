import React from "react";
import "./Product.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
function Product(props) {
  return (
    <div className="product_container">
      <div className="product_circle"></div>
      <img className="product_image" src={props.item.img} />
      <div className="product_info">
        <div className="product_icon">
          <ShoppingCartOutlined />
        </div>
        <div className="product_icon">
          <SearchOutlined />
        </div>
        <div className="product_icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}
export default Product;
