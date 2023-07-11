import React from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value.toUpperCase());

    console.log("value is:", event.target.value.toUpperCase());
  };
  return (
    <div className="navbar_container ">
      <div className="navbar_wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="searchbar">
            <input
              className="input mobile_input"
              placeholder="search"
              onChange={handleChange}
            ></input>
            <Link to={"/" + message} style={{ textDecoration: "none" }}>
              <SearchIcon style={{ color: "gray", fontSize: 16 }}></SearchIcon>
            </Link>
          </div>
        </div>

        <div className="centre">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">SWATHI GARMENTS</h1>
          </Link>
        </div>
        <div className="right">
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="menuitem">REGISTER</div>
          </Link>
          <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
            <div className="menuitem">SIGNIN</div>
          </Link>
          <div className="menuitem">
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge badgeContent={props.count} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
