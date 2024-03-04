import { Grid } from '@mui/material'
import React from 'react'
import Slider from '../Component/Home/Slider'
import LatestProduct from '../Component/Home/LatestProduct'
import TopBrands from '../Component/Home/TopBrands'

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Slider />
      <LatestProduct />
      <TopBrands />
    </Grid>
  )
}

export default Home