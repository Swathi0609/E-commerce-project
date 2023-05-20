import React from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";

export default function navbar() {
  return (
    <div className="container mobile_container">
      <div className="wrapper mobile_wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="searchbar">
            <input className="input mobile_input" placeholder="search"></input>
            <SearchIcon style={{ color: "gray", fontSize: 16 }}></SearchIcon>
          </div>
        </div>
        <div className="centre">
          <h1 className="logo">SWATHI GARMENTS</h1>
        </div>
        <div className="right">
          <div className="menuitem">REGISTER</div>
          <div className="menuitem">SIGNIN</div>
          <div className="menuitem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
