import React from 'react'
import { Grid } from '@mui/material'
import Slider from './Slider'

const TopBrands = () => {
  return (
    <Grid container spacing={0} className='topBrands'>
      <div className="title">Our Top Brands</div>
      <Slider />
    </Grid>
  )
}

export default TopBrands