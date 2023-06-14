import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Modal,
  Box,
  TextField,
  Divider,
  Avatar,
} from "@material-ui/core";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import contact from "./Homepage11";
import HomepageScreen11 from "./Homepage11";
import classs from "./Navbar.module.css";

const useStyles = makeStyles({
  button: {
    backgroundColor: "white",
    borderRadius: ".75rem",
    height: "3rem",
    "&:hover": {
      backgroundColor: "yellow",
    },
    "&:focus": {
      backgroundColor: "yellow",
      borderRadius: 0,
    },
  },
  link: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Navbar() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);
  setIsSubmitted(false);}
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      caption: {
        fontSize: ".71rem",
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
        fontSize: "0.85rem",
      },
    },
    spacing: (factor) => `${0.8 * factor}rem`,
  });
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", duration: 2000 });
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
        style={{
          height: "4.5rem",
          backgroundColor: "#EDEEF1",
          maxWidth: "95.75rem",
          margin: "auto",
          marginRight: "1rem",
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: "#EDEEF1",
            width: "86.75rem",
            marginBottom: "1.3rem",
            padding: 0,
            marginLeft: "1.8rem",
            marginRight: "1rem",
          }}
        >
          {/* <Link to="/contact" style={{ textDecoration: "none" }}> */}
          <Button
            color="inherit"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              padding: 0,
              width: "8rem",
              justifyContent: "left",
              marginLeft: "1.9rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
            classes={{ root: classes.link }}
            onClick={handleOpen}
          >
            <Typography
              variant="body1"
              style={{
                fontFamily: "Inter",
                fontWeight: 800,
                color: "#292D32",
              }}
            >
              {" "}
              <u> Contact us </u>
            </Typography>
          </Button>
          {/* </Link> */}
          {/* Contact Us modal start */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className={classes.box}
              sx={style}
              style={{
                height: "32rem",
                width: "50rem",
                border: "none",
                borderRadius: "0.75rem",
              }}
            >
              {isSubmitted ? <>
              <div>
      <div
        style={{
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/divr26z8e/image/upload/v1685991500/Screenshot_2023-05-31_at_3.43.19_PM-removebg-preview_ukwhrn.png"
            style={{
              height: "8rem",
              display: "block",
              marginLeft: "5rem",
              width: "28rem",
              marginBottom: "2rem",
            }}
          />
        </div>
        <div>
          <Typography
            variant="h3"
            style={{
              fontFamily: "Inter",
              width: "60rem",
              marginLeft: "5rem",
              fontWeight: "400",
            }}
          >
            Thank You for your message.<br></br>Shuru will get back to you
            shortly.
          </Typography>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/divr26z8e/image/upload/v1685991453/Screenshot_2023-06-02_at_3.44.12_PM-removebg-preview_zwh6tu.png"
            style={{
              height: "10rem",
              display: "block",
              marginLeft: "27rem",
              width: "18rem",
              marginTop: "2rem",
            }}
          />
        </div>
      </div></div>
              </> : <div>
                
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Contact Us
                </Typography>
               
                <Divider />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "0.8rem",
                    }}
                  >
                    <div>
                      <Typography
                        style={{
                          fontFamily: "Inter",
                          display: "flex",
                          position: "relative",
                          left: "0.2rem",
                          marginTop: "2.5rem",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                        }}
                      >
                        First Name:
                      </Typography>
                      <TextField
                        variant="standard"
                        name="first_name"
                        onChange={(e) => handleChange(e)}
                        InputProps={{
                          disableUnderline: "true",
                          style: {
                            marginTop: "0.5rem",
                            padding: "2rem",
                            height: "4.5rem",
                            width: "20rem",
                            backgroundColor: "#0022F2",
                            borderRadius: "0.75rem",
                            color: "white",
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
                          marginTop: "1rem",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                        }}
                      >
                        LastName:
                      </Typography>
                      <TextField
                        variant="standard"
                        name="last_name"
                        onChange={(e) => handleChange(e)}
                        InputProps={{
                          disableUnderline: "true",
                          style: {
                            marginTop: "1rem",
                            height: "4.5rem",
                            padding: "2rem",
                            width: "20rem",
                            backgroundColor: "#d3d3d3 ",
                            borderRadius: "0.75rem",
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
                          marginTop: "1rem",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                        }}
                      >
                        Email:
                      </Typography>
                      <TextField
                        variant="standard"
                        name="email_id"
                        onChange={(e) => handleChange(e)}
                        InputProps={{
                          disableUnderline: "true",
                          style: {
                            marginTop: "1rem",
                            height: "4.5rem",
                            width: "20rem",
                            borderRadius: "0.75rem",
                            backgroundColor: "#d3d3d3 ",
                            padding: "2rem",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Typography
                        style={{
                          display: "flex",
                          position: "relative",
                          left: "4.2rem",
                          fontFamily: "Inter",
                          marginTop: "2.5rem",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                        }}
                      >
                        Your Message:
                      </Typography>
                      <TextField
                        variant="standard"
                        name="message"
                        multiline
                        onChange={(e) => handleChange(e)}
                        InputProps={{
                          disableUnderline: "true",
                          style: {
                            marginTop: "0.5rem",
                            borderRadius: "0.75rem",
                            height: "21rem",
                            width: "25rem",
                            display: "flex",
                            position: "relative",
                            left: "4rem",
                            backgroundColor: "#d3d3d3 ",
                            padding: "2rem",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  variant="contained"
                  onClick={() => setIsSubmitted(true)}
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
                    bottom: "5rem",
                    right: "0rem",
                    fontFamily: "Inter",
                  }}
                >
                  <b>Submit</b>
                </Button>
              </div>}
              
            </Box>
          </Modal>
          <Grid
            container
            style={{
              marginLeft: "38rem",
              width: "65.3125rem",
              height: "1.8rem",
              marginBottom: "0.6rem",
            }}
          >
            <Paper style={{ boxShadow: "none", borderRadius: ".75rem" }}>
              {/*<a href="#projects" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      padding: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Projects
                  </Typography>
                </Button>
              </a>*/}
              {/* <a href="#overview" style={{ textDecoration: "none" }}> */}
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("overview")}
                >
                  {" "}
                  Overview
                </Typography>
              </Button>
              {/* </a> */}
              {/*<a href="#categories" style={{ textDecoration: "none" }}>
                <Button color="inherit" className={classes.button}>
                  <Typography
                    variant="caption"
                    style={{
                      fontFamily: "Inter",
                      margin: ".45rem",
                      fontWeight: 500,
                      color: "#292D32",
                    }}
                  >
                    {" "}
                    Categories
                  </Typography>
                </Button>
                  </a>*/}
              {/* <a href="#whyshuru" style={{ textDecoration: "none" }}> */}

              <Button color="inherit" className={classes.button} style={{}}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".61rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("explore")}
                >
                  {" "}
                  Explore
                </Typography>
              </Button>
              {/* </a> */}
              {/* <a href="#howitworks" style={{ textDecoration: "none" }}> */}
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("howItWorks")}
                >
                  {" "}
                  How it works{" "}
                </Typography>
              </Button>
              {/* </a> */}
              {/* <a href="#aboutus" style={{ textDecoration: "none" }}> */}
              {/* </a> */}
              {/* <a href="#benefits" style={{ textDecoration: "none" }}> */}
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("benifits")}
                >
                  {" "}
                  Benefits{" "}
                </Typography>
              </Button>
              {/* </a> */}
              {/* <a href="#roadmap" style={{ textDecoration: "none" }}> */}
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("whyShuru")}
                >
                  {" "}
                  Why Shuru
                </Typography>
              </Button>
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("roadmap")}
                >
                  {" "}
                  Roadmap
                </Typography>
              </Button>
              <Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                  onClick={() => handleScroll("aboutUs")}
                >
                  {" "}
                  About{" "}
                </Typography>
              </Button>
              {/* </a> */}
              {/*<Button color="inherit" className={classes.button}>
                <Typography
                  variant="caption"
                  style={{
                    fontFamily: "Inter",
                    margin: ".45rem",
                    fontWeight: 500,
                    color: "#292D32",
                  }}
                >
                  {" "}
                  Partners
                </Typography>
                </Button>*/}
              {/* <a href="#press" style={{ textDecoration: "none" }}> */}
              {/* </a> */}
            </Paper>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
