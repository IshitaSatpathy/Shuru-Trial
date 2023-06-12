import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Subscribe() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2" style={{
                     fontFamily: "Inter",
                     fontWeight: 800,
                     color: "#292D32",
                     fontSize: "calc(61.04/16*1rem)",
                     display:"flex",
                     position:"relative",
                     bottom:"18rem",
                     right:"4rem"
                   }}>
          <b>You're onboarded.</b>
      </Typography>
      <Typography style={{
          fontFamily: "Inter",
          fontSize: "calc(16/16*1rem)",
          display:"flex",
          position:"relative",
          bottom:"15rem",
          right:"36.5rem"
      }}>
          We'll reach out to you with the next steps.
      </Typography>
    </div>
  );
}
