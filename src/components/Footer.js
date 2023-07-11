import React from "react";
import "./Footer.css";
import {
  AddLocation,
  Facebook,
  Instagram,
  LocationCity,
  MailLockOutlined,
  Map,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer_container">
      <div className="Footer_left">
        <h1 className="Footer_logo">SWATHI GARMENTS</h1>
        <p className="Footer_desc">
          Is a designer-focused clothing store that carries couture and runway
          pieces from the hottest designers. Be sure to check out their chic
          selection of dresses, skirts, jackets, and more. From event dressing
          to casual weekend wear, has the fashion you want.
        </p>
        <div className="Footer_socialcontainer">
          <div className="Footer_socialicon colorone ">
            <Facebook></Facebook>
          </div>
          <div className="Footer_socialicon colortwo">
            <Instagram></Instagram>
          </div>
          <div className="Footer_socialicon color3">
            <Twitter></Twitter>
          </div>
          <div className="Footer_socialicon color4">
            <Pinterest></Pinterest>
          </div>
        </div>
      </div>
      <div className="Footer_centre">
        <div className="footer_tittle">USEFUL LINKS</div>
        <ul className="footer_list">
          {/* <Link to="/HOME" style={{ textDecoration: "none" }}> */}
          <li className="footer_listitem">Home</li>
          {/* </Link> */}
          {/* <Link to="/S" style={{ textDecoration: "none" }}> */}

          <li className="footer_listitem">WOMEN'S SHIRT </li>
          <li className="footer_listitem">WOMEN'S LIGHTJACKET</li>
          <li className="footer_listitem">WOMEN'S LOUNGEWEAR</li>
          <li className="footer_listitem">WOMAN'S KURTIS</li>
          <li className="footer_listitem">WOMAN'S LONGFROCK</li>
          <li className="footer_listitem">Order Tracking</li>
          <li className="footer_listitem">Wishlist</li>
          <li className="footer_listitem">Wishlist</li>
          <li className="footer_listitem">Terms</li>
        </ul>
      </div>
      <div className="Footer_right">
        <div className="footer_right_tittle">Contact</div>
        <div className="contact_item">
          <AddLocation style={{ marginRight: "10px" }} />
          ,Dixie path,southrampart
        </div>
        <div className="contact_item">
          <Phone style={{ marginRight: "10px" }} />
          +9876543210
        </div>
        <div className="contact_item">
          <MailLockOutlined style={{ marginRight: "10px" }} />
          contact@swathigarments
        </div>
        <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
}
