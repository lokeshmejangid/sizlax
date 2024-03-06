import { Grid } from '@mui/material'
import React from 'react'
import Slider from '../../Component/Home/Slider'
import LatestProduct from '../../Component/Home/LatestProduct'
import TopBrands from '../../Component/Home/TopBrands'
import Advertisement from '../../Component/Home/Advertisement'
import MainFocusProduct from '../../Component/Home/MainFocusProduct'
import SpecialDiscount from '../../Component/Home/SpecialDiscount'
import BestSellingProduct from '../../Component/Home/BestSellingProduct'

const Home = () => {
  return (
    
      <>
      <Slider />
      <Advertisement />
      <LatestProduct />
      <TopBrands />
      <MainFocusProduct />
      <SpecialDiscount />
      <BestSellingProduct />
      </>
    
  )
}

export default Home