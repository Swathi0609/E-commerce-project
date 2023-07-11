import { LocalShipping, Money, SupportAgent } from "@mui/icons-material";
import React from "react";
import "./Icons.css";
import line from "../images/line.png";

export default function Icons() {
  return (
    <div className="icons_container">
      <div className="icons_product">
        <LocalShipping />
        Free LocalShipping
        <h5> On All Order Over ₹5000 </h5>
      </div>
      <div className="line">
        <img src={line} />
      </div>

      <div className="icons_product">
        <SupportAgent /> Dedicated Support
        <h5> Quick Response 24/7</h5>
      </div>
      <div className="line">
        <img src={line} />
      </div>
      <div className="icons_product">
        <Money />
        Money Back Guarantee
        <h5>Worry-Free-Shipping</h5>
      </div>
    </div>
  );
}
