import { Card, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./HomeCard.module.css";
import axios from "axios";
import ThankCard from "../ThankCard/ThankCard";
const HomeCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("false");

  const handleEmailSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://shuru-app.adaptable.app/email/",
        {
          email: email,
        }
      );
      if (response.status == 201) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      {isSubmitted ? (
        <ThankCard />
        
      ) : (
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
              "What if I had an Al designer who offers advice and ideas on
              sustainable practices?"
            </h1>
            <h2 className={classes.subText}>
              Shuru is a community for creators, developers and investors
              passionate about ai-based innovation.
            </h2>
            <h2 className={classes.subText}>
              Start with an idea on Shuru.
              <br />
              Subscribe to join the community.
            </h2>
            <div className={classes.emailContainer}>
              <TextField
                className={classes.textfield}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                variant="standard"
                fullWidth="true"
                type="email"
                InputProps={{
                  disableUnderline: "true",
                  style: {
                    fontSize: 16,
                    backgroundColor: "#EDEEF2",
                    borderRadius: "12px",
                    padding: "4px 20px",
                  },
                }}
              />
              <button
                onClick={() => {
                  handleEmailSubmit();
                }}
                className={classes.submitButton}
              >
                Submit
              </button>
              <p className={classes.emailText}>
                No spam emails. We'll only notify you when we're ready.
              </p>
            </div>
            <div>
              <p className={classes.footertext}>
                For partnerships or other queries you can reach out to us at
                <a href = "mailto: hello@shuru.io" className={classes.mail}> hello@shuru.io</a>
              </p>
            </div>
          </Card>
        </div>
       )} 
    </>
  );
};

export default HomeCard;
