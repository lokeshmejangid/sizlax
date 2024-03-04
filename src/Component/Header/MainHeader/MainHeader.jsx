import React from 'react'
import './MainHeader.css'
import { Grid } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom';

const NavCategory = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  }
  return (
    <Grid container spacing={0} className='navCategory'>
        <img src='./assets/img/logo.gif' className="logoImg" alt="logo" onClick={handleLogo}/>
        <NavLink to='/category'>Categories</NavLink>
        <NavLink to='/brands'>Brands</NavLink>
        <NavLink to='/luxe'>Luxe</NavLink>
        <NavLink to='/nykaaFashion'>Nykaa Fashion</NavLink>
        <NavLink to='/beautyAdvice'>Beauty Advice</NavLink>
    </Grid>
  )
}

export default NavCategory