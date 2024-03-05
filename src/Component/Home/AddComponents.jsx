import { Grid } from "@mui/material";
import React from "react";

const AddComponents = (props) => {
  const { id, tagLine, des, img } = props.add;

  return (
    <Grid item xs={3} className="add">
      <img src={img} alt={img} />
    </Grid>
  );
};

export default AddComponents;
