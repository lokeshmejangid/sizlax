import React from "react";
import { Grid, Typography } from "@mui/material";

const LatestProduct = () => {
  return (
    <Grid container spacing={0} mt={1} className="latestProduct">
      <Grid item xs={12}>
        <div className="title">Our Latest Product</div>
        <img
          src="./assets/img/latestProduct.avif"
          alt="Latest Product"
<<<<<<< HEAD
          height="100%"
=======
          height="400px"
>>>>>>> origin/dev
          width={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default LatestProduct;
