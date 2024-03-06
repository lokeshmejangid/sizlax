import React from 'react'
import { Grid } from '@mui/material'
const BestSellingProduct = () => {
  return (
    <Grid container spacing={0} mt={2}>
      <div>Best Selling Product</div>
      <Grid item xs={6} className="description">
        <div className="des">Up To 35% Off</div>
        <div className="des2">On Entire Range</div>
      </Grid>
      <Grid item xs={6}>
        <img src='./assets/img/best-selling/excited.jpg' height={'100px'} width={'100px'} alt='' />
      </Grid>
    </Grid>
  )
}

export default BestSellingProduct