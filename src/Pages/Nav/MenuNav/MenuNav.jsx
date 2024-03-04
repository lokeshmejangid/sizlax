import React from 'react'
import './MenuNav.css'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

const MenuNav = () => {
  return (
    <Grid container spacing={0} className='menuNav'>
      <NavLink to='/makeUp'>MakeUp</NavLink>
      <NavLink to='/skin'>Skin</NavLink>
      <NavLink to='/hair'>Hair</NavLink>
      <NavLink to='/appliances'>Appliances</NavLink>
      <NavLink to='/bathBody'>Bath & Body</NavLink>
      <NavLink to='/natural'>Natural</NavLink>
      <NavLink to='/momBaby'>Mom & Baby</NavLink>
      <NavLink to='/healthWellness'>Health & Wellness</NavLink>
      <NavLink to='/men'>Men</NavLink>
      <NavLink to='/fragrance'>Fragrance</NavLink>
      <NavLink to='/lingerie'>Lingerie & Accessories</NavLink>
    </Grid>
  )
}

export default MenuNav