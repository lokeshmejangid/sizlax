import React from 'react'
import { Grid } from '@mui/material'
import Carousel from "react-multi-carousel";
import SliderResponsive from "../../Utils/SliderResponsive";
import SliderVerticalComponents from "./SliderVerticalComponents";

const MainFocusProduct = () => {
  
  const sliderData = [
    {
      id: 1,
      tagLine: "General",
      img: "./assets/img/slide1.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 2,
      tagLine: "Popular",
      img: "./assets/img/slide2.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 3,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/slide3.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
  ];
  return (
    <div container spacing={0} className='focusProduct'>
      <div className="title">Our Main Product</div>
      <Carousel responsive={SliderResponsive}>
        {sliderData.map((slide) => {
          return <SliderVerticalComponents slide={slide} />;
        })}
      </Carousel>
    </div>
  )
}

export default MainFocusProduct