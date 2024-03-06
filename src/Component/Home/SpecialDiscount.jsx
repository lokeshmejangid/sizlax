import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import SliderResponsive from "../../Utils/SliderResponsive";
import SliderVerticalComponents from "./SliderVerticalComponents";
import SliderResponsiveSecialOffer from "../../Utils/SliderResponsiveSecialOffer";

const SpecialDiscount = () => {
  const sliderData = [
    {
      id: 1,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 2,
      img: "./assets/img/special-offer/2.avif",
    },
    {
      id: 3,
      img: "./assets/img/special-offer/3.avif",
    },
    {
      id: 4,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 5,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 6,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 7,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 8,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 9,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 10,
      img: "./assets/img/special-offer/1.avif",
    },
    {
      id: 11,
      img: "./assets/img/special-offer/1.avif",
    },
  ];
  return (
    <Grid container spacing={0} mt={5} className="special-offer">
      <Grid item xs={12}>
        <img
          src="./assets/img/special-offer/banner1.avif"
          className="img-full img-border-radius"
          alt="banner"
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 2}}>
        <img
          src="./assets/img/special-offer/banner2.avif"
          className="img-full img-border-radius"
          alt="banner"
        />
      </Grid>
      <Grid item xs={12} sx={{mt: 2}}>
        <Carousel responsive={SliderResponsiveSecialOffer}>
          {sliderData.map((slide) => {
            return <SliderVerticalComponents slide={slide} />;
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default SpecialDiscount;
