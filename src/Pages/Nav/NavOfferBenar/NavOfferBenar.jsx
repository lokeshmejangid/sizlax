import { Grid } from '@mui/material'
import React from 'react'
import './NavOfferBenar.css'
import { NavLink } from 'react-router-dom'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { CiLocationOn } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavOfferBenar = () => {
    return (
        <Grid container spacing={0} className='navOfferBenar'>
            <NavLink to='/getApp' >
                <PhoneAndroidIcon />
                Get App
            </NavLink>|
            <NavLink to='/storeEvent'>
                <CiLocationOn />
                Store & Event
            </NavLink>|
            <NavLink to='/giftCard'>
                <MdCardGiftcard />
                Gift Card
            </NavLink>|
            <NavLink to='/help'>
                <IoIosHelpCircleOutline />
                Help
            </NavLink>
        </Grid>
    )
}

export default NavOfferBenar