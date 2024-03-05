import { Grid } from '@mui/material';
import React from 'react'

const SliderComponents = (props) => {
    const {id, tagLine, img, des} = props.slide;
  return (
    <Grid item xs={4} className='slide'>
        <img src={img} alt={img} /> 
    </Grid>
  )
}
 
export default SliderComponents