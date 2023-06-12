import React, { useState } from "react";
import Logo from "../../logo";
import { Button } from "@material-ui/core";
import classes from "./Home.module.css";
import HomeCard from "../HomeCard/HomeCard";
import ThankCard from "../ThankCard/ThankCard";
const Home = () => {

  return (
    <>
      <div className={classes.logoContainer}>
        <Button
          color="inherit"
          style={{
            borderRadius: "10px",
            color: "black",
            backgroundColor: "white",
            height: "35px",
          }}
        >
          <Logo />
        </Button>
      </div>
      <div className={classes.homeContainer}>
      
          <HomeCard />
      
      </div>
    </>
  );
};

export default Home;
