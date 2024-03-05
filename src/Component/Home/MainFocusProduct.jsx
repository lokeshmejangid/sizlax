import React from 'react'
import { Grid } from '@mui/material'
import Slider from './Slider'

const MainFocusProduct = () => {
  return (
    <div container spacing={0} className='focusProduct'>
      <div className="title">Our Main Product</div>
      <Slider />
    </div>
  )
}

export default MainFocusProduct