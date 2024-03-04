import React from 'react'
import { Grid } from '@mui/material'
import Slider from './Slider'

const MainFocusProduct = () => {
  return (
    <Grid container spacing={0} className='focusProduct'>
      <div className="title">Our Main Product</div>
      <Slider />
    </Grid>
  )
}

export default MainFocusProduct