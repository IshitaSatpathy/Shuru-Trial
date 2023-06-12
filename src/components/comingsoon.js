import * as React from "react";
import { Grid, TextField, Button, } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
export default function Coming() {
  return (
      <div>
          <div>
              <Header/>
          </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h2" style={{
                     fontFamily: "Inter",
                     fontWeight: 800,
                     color: "#292D32",
                     fontSize: "calc(61.04/16*1rem)",
                     display:"flex",
                     position:"relative",
                     bottom:"10rem",
                     right:"4rem"
                   }}>
          <b>Coming Soon.</b>
      </Typography>
      <Typography style={{
          fontFamily: "Inter",
          fontSize: "calc(16/16*1rem)",
          display:"flex",
          position:"relative",
          bottom:"7rem",
          right:"29.5rem"
      }}>
          <Link to={"/subscribe"}>Subscribe to Shuru </Link> &nbsp; to get notified when we're ready for you.
      </Typography>
    </div>
    <div>
              <Navbar/>
          </div>
    </div>
  );
}
