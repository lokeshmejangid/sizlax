import { Grid } from '@mui/material'
import React from 'react'
import Slider from '../../Component/Home/Slider'
import LatestProduct from '../../Component/Home/LatestProduct'
import TopBrands from '../../Component/Home/TopBrands'
import Advertisement from '../../Component/Home/Advertisement'
import MainFocusProduct from '../../Component/Home/MainFocusProduct'

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Slider />
      <Advertisement />
      <LatestProduct />
      <TopBrands />
      <MainFocusProduct />
    </Grid>
  )
}

export default Home