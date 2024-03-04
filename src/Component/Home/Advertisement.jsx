import { AddComment } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import AddComponents from "./AddComponents";

const Advertisement = () => {
  const addData = [
    {
      id: 1,
      tagLine: "Min. 50% OFF",
      des: "Big Brands, Bigger Savings",
      img: "./assets/img/add.gif",
    },
    {
      id: 2,
      tagLine: "Min. 50% OFF",
      des: "Big Brands, Bigger Savings",
      img: "./assets/img/add.gif",
    },
    {
      id: 3,
      tagLine: "Min. 50% OFF",
      des: "Big Brands, Bigger Savings",
      img: "./assets/img/add.gif",
    },
    {
      id: 4,
      tagLine: "Min. 50% OFF",
      des: "Big Brands, Bigger Savings",
      img: "./assets/img/add.gif",
    },
  ];
  return (
    <Grid container spacing={0} className="addCont" mt={1}>
      <Grid item xs={12}>
        <div className="title">Advertisement</div>
      </Grid>
      {addData.map((add, index) => {
        return <AddComponents add={add} key={index} />;
      })}
    </Grid>
  );
};

export default Advertisement;
