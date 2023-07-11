import React from "react";
import { useLocation } from "react-router-dom";
import "./SingleDressItem.css";

import {
  KURTIS,
  LIGHTJACKET,
  LOUNGEWEAR,
  LONGFROCK,
  SHIRTPRODUCTS,
} from "./data";
import {
  CurrencyRupee,
  CurrencyRupeeOutlined,
  CurrencyRupeeSharp,
  EighteenUpRatingOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Rating } from "@mui/material";

function SingleDressItem() {
  const location = useLocation();
  var word = location.pathname.split("/");
  if (word[1] == "KURTIS") {
    var result = KURTIS.map((item) => {
      if (item.title === word[2]) {
        return item;
      } else {
        return 0;
      }
    });
  }
  if (word[1] == "LIGHTJACKETS") {
    var result = LIGHTJACKET.map((item) => {
      if (item.title === word[2]) {
        return item;
      } else {
        return 0;
      }
    });
  }
  if (word[1] == "LOUNGEWEARLOVE") {
    var result = LOUNGEWEAR.map((item) => {
      if (item.title === word[2]) {
        return item;
      } else {
        return 0;
      }
    });
  }
  if (word[1] == "LONGFROCK") {
    var result = LONGFROCK.map((item) => {
      if (item.title === word[2]) {
        return item;
      } else {
        return 0;
      }
    });
  }
  if (word[1] == "SHIRTPRODUCTS") {
    var result = SHIRTPRODUCTS.map((item) => {
      if (item.title === word[2]) {
        return item;
      } else {
        return 0;
      }
    });
  }
  console.log(result);
  var res = result.filter((item) => {
    return item != 0;
  });
  console.log(res);
  return (
    <div className="SingleDress_container">
      {/* <div className="SingleDress_infocontainer"> */}
      {res.map((item) => {
        return (
          <>
            <img className="SingleDress_image" src={item.img} />
            <h1 className="SingleDress_title">{item.title}</h1>
            <p className="SingleDress_desc">{item.desc}</p>
            <h1 className="SingleDress_price">{item.price}</h1>
          </>
        );
      })}
      <button className="SingleDress_btn1">BUY NOW</button>
    </div>
    // </div>
  );
}

export default SingleDressItem;
