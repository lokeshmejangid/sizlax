import { Grid } from "@mui/material";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SliderVertial = (props) => {
  const { id, tagLine, img, des, des2 } = props.slide;
  const { style } = props;
  
  return (
    <Grid container spacing={0} className="slide">
      <Grid item xs={12}>
        <img src={img} alt={img} height="170px" width="170px"/>
      </Grid>
      {des && (
        <Grid container spacing={0} mt={2}>
          <Grid item xs={6}>
            <div className="des">{des}</div>
            <div className="des2">{des2}</div>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
            <span className="button">
              Shop Now
              <FaArrowRightLong />
            </span>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SliderVertial;
