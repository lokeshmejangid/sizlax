import React from "react";
import { Grid } from "@mui/material";
import "./Header.css";
import SaleOffer from "./SaleOffer/SaleOffer";
import NavCategory from "./MainHeader/MainHeader";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import MenuNav from "./Nav/Nav";

const Header = () => {
  return (
    <Grid container spacing={0} className="header">
      <Grid item xs={12} container spacing={0} className="offerBenar">
        <Grid item xs={6}>
          Pay Day Sale is Live - Up To 50% Off On Salary Saving Steals
        </Grid>
        <Grid item xs={6}>
          <SaleOffer />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={0} className="category">
        <Grid item xs={4}>
          <NavCategory />
        </Grid>
          <Grid item xs={4} className="searchCon">
            <input type="text" placeholder="Search on Seezlax" />
            <CiSearch className="searchIcon" />
          </Grid>
          
        <Grid item xs={4} className="cartCont">
            <span className="cur-pointer">Sign In</span>
            <FaShoppingBag className="cur-pointer" />
          </Grid>
      </Grid>
      <hr />
      <MenuNav />
    </Grid>
  );
};

export default Header;
