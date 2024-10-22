import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import style from './SliderElem.module.css'

export function SliderMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
       <img src="./12.jpg" alt="" class={style.SliderImg} />
        </div>
        <div>
        <img src="./22.jpg" alt=""   class={style.SliderImg} />
        </div>
        <div>
        <img src="./122.jpg" alt=""  class={style.SliderImg}  />
        </div>
        <div>
        <img src="./2121.jpg" alt=""   class={style.SliderImg} />
        </div>
        <div>
        <img src="./3131.jpg" alt=""   class={style.SliderImg} />
        </div>
        <div>
        <img src="./43.webp" alt=""   class={style.SliderImg} />
        </div>
      </Slider>
    </div>
  );
}
