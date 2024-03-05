import { Grid } from '@mui/material'
import React from 'react'
import "./Home.css"
import SliderComponents from './SliderComponents'

const Slider = () => {
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
  ]
  return (
    <Grid container spacing={0} className='slider' mt={5}>
      {sliderData.map((slide, index) => {
        return(
          <SliderComponents slide={slide} />
        )
      })}
    </Grid>
  )
}

export default Slider