import React from "react";
import "./Client.css";

export default function Client() {
  return (
    <>
      <div className="client_container">
        <div className="client_left">
          <div className="client_title">What Our Clients Say </div>
          <p className="client_desc">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua".
          </p>
        </div>
        <div className="client_right">
          <p className="client_rating">4.8 </p>
          <h1>⭐⭐⭐⭐⭐</h1>
          <p className="client_customer"> Average Customer Rating</p>
        </div>
      </div>
      <div className="client_bottom">
        <div classname="client_bottom_frst">
          <p className="client_para1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua".
          </p>
          <img
            className="client_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFt1eqq_r3QxFnhZhCY3SeqhDGer5y9_i1g&usqp=CAU"
          ></img>
          <p>ELTEN</p>
        </div>
        <div classname="client_bottom_sec">
          <p className="client_para2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua".
          </p>
          <img
            className="client_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xqjfFEPZ8yi2bo0GFN-xiifwGx3ELB9Tvw&usqp=CAU"
          ></img>
          <p>JOHN KIM</p>
        </div>
        <div classname="client_bottom_third">
          <p className="client_para3">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua".
          </p>
          <img
            className="client_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GXbB6bvB4fZZCEwVpaccXStTKuXB2W22qKre7iAlrP1OjsckhSmHAvKSVPMBjQSx_Ho&usqp=CAU"
          ></img>
          <p> RUSSEL DROU</p>
        </div>
      </div>
    </>
  );
}
