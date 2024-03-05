import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";
import SliderComponents from "./SliderComponents";

import Carousel from "react-multi-carousel";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderData = [
    {
      id: 1,
      tagLine: "General",
      img: "./assets/img/slide1.avif",
      des: "Up To 50% Off",
    },
    {
      id: 2,
      tagLine: "Popular",
      img: "./assets/img/slide2.avif",
      des: "Up To 50% Off",
    },
    {
      id: 3,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "Up To 50% Off",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "Up To 50% Off",
    },
    {
      id: 5,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "Up To 50% Off",
    },
    {
      id: 6,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "Up To 50% Off",
    },

  ];
  return (
    <Carousel responsive={responsive} className="mt-2">
      {sliderData.map((slide) => {
        return <SliderComponents slide={slide}/>
      })}
    </Carousel>
  );
};

export default Slider;
