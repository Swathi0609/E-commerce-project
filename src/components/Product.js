import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
function Product(props) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div className="Product_container">
      <div className="Product_circle"></div>
      <img className="Product_image" src={props.item.img} alt="dress" />
      <div className="Product_info">
        <div className="Product_icon">
          <Link
            to={`${props.item.category}`}
            style={{ textDecoration: "none" }}
          >
            <SearchOutlined />
          </Link>
        </div>
        <div className="Product_icon">
          <FavoriteBorderOutlined
            onClick={handleClick}
            style={{ color: click ? "red" : "grey" }}
          />
        </div>
      </div>
      <div className="product_wrap">
        <p className="product_para" src={props.item.title}></p>
        <p className="product_para" src={props.item.price}></p>
      </div>
    </div>
  );
}
export default Product;
