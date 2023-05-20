import React, { useState } from "react";
import "./slider.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../components/data";
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  var trans = slideIndex * -100 + "vw";
  function handleclick(direction) {
    if (direction == "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <div className="slider_container">
      <div className="Arrow left" onClick={() => handleclick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="slider_wrapper"
        slideIndex={slideIndex}
        style={{ transform: "translateX(" + trans + ")" }}
      >
        {sliderItems.map((item) => (
          <div className="slide" bg={item.bg} key={item.id}>
            <div className="slide_img_container">
              <img className="slide_img" src={item.img} />
            </div>
            <div className="slide_info_container">
              <h1 className="h1-title">{item.title}</h1>
              <p className="slide_description">{item.desc}</p>
              <button className="slide_btn">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="Arrow right" onClick={() => handleclick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}
