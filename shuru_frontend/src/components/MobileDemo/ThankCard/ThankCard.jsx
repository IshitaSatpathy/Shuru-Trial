import { Card, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./ThankCard.module.css";

const ThankCard = () => {
  return (
    <div>
      <Card
        variant="plain"
        className={classes.cardContainer}
        style={{
          borderRadius: "24px",
          boxShadow: "none",
        }}
      >
        <h1 className={classes.mainText}>
         You're onboarded.
        </h1>
        <div>
          <p className={classes.footertext}>
          We'll notify you when we're ready.
          </p>
        </div>
      </Card>
    </div>
  )
}

export default ThankCard