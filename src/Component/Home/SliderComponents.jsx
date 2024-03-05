import { Grid } from "@mui/material";
import React from "react";

const SliderComponents = (props) => {
  const { id, tagLine, img, des } = props.slide;
  return (
    <div className="slide">
      <img src={img} alt={img} />
    </div>
  );
};

export default SliderComponents;
