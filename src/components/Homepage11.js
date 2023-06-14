import React, { useState } from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  Modal
} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import interRegular from "../static/Inter-Regular.ttf";
import interBold from "../static/Inter-Bold.ttf";
import interExtraBold from "../static/Inter-ExtraBold.ttf";
import EastIcon from "@mui/icons-material/East";
import whyshuru from "../whyshuru.png";
import { styled } from "@mui/system";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ThankYou from "./ThankYou";
import axios from "axios";

const StyledTextField = styled(TextField, {
  name: "StyledTextField",
})({
  width: 300,
  "& .MuiInputBase-root": {
    height: 100,
  },
});
const useStyles = makeStyles((theme) => ({
  circle: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "9.3rem",
    left: "6rem",
  },
  "@font-face": {
    fontFamily: "Inter",
    src: `
       url(${interRegular}) format('truetype'),
       url(${interBold}) format('truetype'),
       url(${interExtraBold}) format('truetype')
     `,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  textField: {
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-input": {
      backgroundColor: "#0022F2",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      backgroundColor: "#0022F2",
    },
  },
  circle1: {
    backgroundColor: blueGrey[50],
    borderRadius: "50%",
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "9.3rem",
    left: "32rem",
  },
}));
function HomepageScreen11() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

   const [details, setDetails] = React.useState({
     first_name: "",
     last_name: "",
     email_id: "",
     message: "",
   });

   const handleChange = (e) => {
     setDetails((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
     }));
     console.log(details)
   };

   const postData = async () => {
     try {
       const response = await axios.post("http://localhost:8000/postdetails/", {
         first_name: details.first_name,
         last_name: details.last_name,
         email_id: details.email_id,
         message_box: details.message,
       });
       if (response.status == 201) {
         setIsSubmitted(true);
       }
     } catch (error) {
       console.error("Error:", error);
     }
   };

  const theme = createMuiTheme({
    typography: {
      caption: {
        fontSize: "0.75rem",
      },
      h5: {
        fontSize: "calc(25/16*1rem)",
      },
      h1: {
        fontSize: "calc(61.04/16*1rem)",
      },
      h2: {
        fontSize: "calc(48.83/16*1rem)",
      },
      h3: {
        fontSize: "calc(39.06/16*1rem)",
      },
      h4: {
        fontSize: "calc(31.25/16*1rem)",
      },
      body1: {
        fontSize: "calc(16/16*1rem)",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
            position: "relative",
            maxWidth: "83.75rem",
            marginTop: "3rem",
          }}
        >
          <Grid
            item
            style={{
              maxWidth: "100%",
              padding: 0,
              marginBottom: 0,
            }}
          >
            <Grid item style={{ position: "relative" }}>
              <Typography
                variant="caption"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                CONTACT US
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: "0rem", width: "83.75rem" }}
            >
              <Grid item style={{ maxWidth: "39.375rem" }}>
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  Contact us
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {isSubmitted ? (
            <ThankYou />
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "80rem",
                  height: "40rem",
                  position: "relative",
                  top: "5rem",
                  marginLeft: "0rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "18rem",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    right: "2rem",
                  }}
                >
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Inter",
                        display: "flex",
                        position: "relative",
                        left: "0.2rem",
                      }}
                    >
                      First Name:
                    </Typography>
                    <TextField
                      variant="standard"
                      name="first_name"
                      onChange={(e)=>handleChange(e)}
                      InputProps={{
                        disableUnderline:"true",
                        style: {
                          marginTop: "0.5rem",
                          padding:"2rem",
                          height: "4.5rem",
                          width: "25rem",
                          backgroundColor: "#0022F2",
                          borderRadius: "0.75rem",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none", // Remove the border
                          },
                        },
                      }}
                    />
                  </div>

                  <div>
                    <Typography
                      style={{
                        marginTop: "1rem",
                        fontFamily: "Inter",
                        display: "flex",
                        position: "relative",
                        left: "0.2rem",
                      }}
                    >
                      LastName:
                    </Typography>
                    <TextField
                      variant="standard"
                      name="last_name"
                      onChange={(e)=>handleChange(e)}
                      InputProps={{
                        disableUnderline:"true",
                        style: {
                          marginTop: "1rem",
                          height: "4.5rem",
                          padding:"2rem",
                          width: "25rem",
                          backgroundColor: "white",
                          borderRadius:"0.75rem",
                        },
                      }}
                    />
                  </div>

                  <div>
                    <Typography
                      style={{
                        marginTop: "1rem",
                        fontFamily: "Inter",
                        display: "flex",
                        position: "relative",
                        left: "0.2rem",
                      }}
                    >
                      Email:
                    </Typography>
                    <TextField
                      variant="standard"
                      name="email_id"
                      onChange={(e)=>handleChange(e)}
                      InputProps={{
                        disableUnderline:"true",
                        style: {
                          marginTop: "1rem",
                          height: "4.5rem",
                          width: "25rem",
                          borderRadius:"0.75rem",
                          backgroundColor:"white",
                          padding:"2rem",
                        },
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    style={{
                      display: "flex",
                      position: "relative",
                      left: "5.2rem",
                      fontFamily: "Inter",
                    }}
                  >
                    Your Message:
                  </Typography>
                  <TextField
                    variant="standard"
                    name="message"
                    multiline
                      onChange={(e)=>handleChange(e)}
                    InputProps={{
                      disableUnderline:"true",
                      style: {
                        marginTop: "0.5rem",
                        borderRadius:"0.75rem",
                        height: "20.53rem",
                        width: "30rem",
                        display: "flex",
                        position: "relative",
                        left: "5rem",
                        backgroundColor: "white",
                        padding:"2rem",
                      },
                    }}
                  />
                </div>
              </div>
              <Button
                variant="contained"
                onClick={() => postData()}
                style={{
                  backgroundColor: "#D3E938",
                  color: "#838383",
                  borderRadius: "5px",
                  float: "right",
                  width: "12rem",
                  marginTop: "6rem",
                  boxShadow: "none",
                  display: "flex",
                  position: "relative",
                  bottom: "16.5rem",
                  right: "7.5rem",
                  fontFamily: "Inter",
                }}
              >
                <b>Submit</b>
              </Button>
            </div>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen11;
{
  /*import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThankYou from "./ThankYou";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div>
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card
            sx={{
              minWidth: "80vw",
              height: "500px",
              maxHeight: "100vh",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "400px",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      <Typography component="div" style={{ fontSize: "18px" }}>
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <Typography style={{ fontSize: "18px" }} component="div">
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "18px" }} component="div">
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                }}
              >
                <CardContent style={{ paddingBottom: "0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "400px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography style={{ fontSize: "18px" }} component="div">
                      Message
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      multiline
                      rows={10}
                    />
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => setIsSubmitted(true)}
                    style={{
                      backgroundColor: "#D3E938",
                      color: "white",
                      borderRadius: "10px",
                      float: "right",

                      marginTop: "10px",
                    }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </div>
      )}
    </div>
  );
}*/
}
