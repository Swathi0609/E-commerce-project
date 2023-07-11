import {
  CurrencyRupeeSharp,
  FavoriteBorderOutlined,
  FavoriteBorderRounded,
  FavoriteOutlined,
  StarRateOutlined,
} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import "./ShirtItem.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ShirtItem.css";

function DressItem(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  return (
    // <div className="shirtitem_full_container">
    <div className="shirtitem_container">
      <div className="shirtitem_info_container">
        <div>
          <img className="Shirtitem_image" src={props.img} />
        </div>
        <div>
          <h1 className="shirtitem_title">{props.title}</h1>
          <p className="shirtitem_desc">{props.desc}</p>
          <h1 className="shirtitem_price">{props.price}</h1>
        </div>
        <div className="button">
          <Link
            to={"/" + props.name + "/" + props.title}
            style={{ textDecoration: "none" }}
          >
            <button className="shirtitem_btn btn1">BUY NOW</button>
          </Link>
          <button
            className="shirtitem_btn btn2"
            onClick={() => {
              props.setcount(props.title, props.price, props.img);
            }}
          >
            Add TO CART
          </button>
          {}
          <div>
            <FavoriteOutlinedIcon
              onClick={handleClick}
              style={{ color: click ? "red" : "black" }}
            />
          </div>
        </div>

        <Rating />
      </div>
    </div>
    // </div>
  );
}

export default DressItem;
