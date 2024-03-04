import React from "react";
import { Grid, Typography } from "@mui/material";

const LatestProduct = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div>Our Latest Product</div>
        <img
          src="./assets/img/latestProduct.avif"
          alt="Latest Product"
          height={"100%"}
          width={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default LatestProduct;
