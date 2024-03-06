import React from 'react'
import { Grid } from '@mui/material'
import Carousel from "react-multi-carousel";
import SliderVerticalComponents from "./SliderVerticalComponents";
import SliderResponsiveSecialOffer from '../../Utils/SliderResponsiveSecialOffer';

const BestSellingProduct = () => {
  const style = {
    height: 300,
    width: 200
  }
  console.log(style);
  const sliderData = [
    {
      id: 1,
      tagLine: "General",
      img: "./assets/img/best-selling/1.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 2,
      tagLine: "Popular",
      img: "./assets/img/best-selling/2.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 3,
      tagLine: "Trending",
      img: "./assets/img/best-selling/3.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/best-selling/4.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/best-selling/5.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/best-selling/6.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },
    {
      id: 4,
      tagLine: "Trending",
      img: "./assets/img/best-selling/7.avif",
      des: "On 5000: Mini Magic Serum",
      des2: "On 6000: 2 Mini Gifts",
    },];
  return (
    <Grid container spacing={0} mt={5} className='best-selling'>
      <Grid item xs={6} className="description">
        <div className='title'>Best Selling Product</div>
        <div className="des">Up To 35% Off</div>
        <div className="des2">On Entire Range</div>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <img src='./assets/img/best-selling/excited.jpg' height={'100px'} width={'100px'} alt='' />
      </Grid>
      <Grid item xs={12} sx={{mt:2}}>
        <Carousel responsive={SliderResponsiveSecialOffer}>
          {sliderData.map((slide) => {
            return <SliderVerticalComponents slide={slide} style={style}/>;
          })}
        </Carousel>
      </Grid>
    </Grid>
  )
}

export default BestSellingProduct