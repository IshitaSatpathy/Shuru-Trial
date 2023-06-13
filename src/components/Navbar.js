import React, {useState,useEffect} from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import contact from "./Homepage11";
import HomepageScreen11 from "./Homepage11";
import classs from "./Navbar.module.css"


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
    }
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

function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = ()=>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
  
    setScrollTop(scrolled);
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])
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
    section.scrollIntoView({ behavior: 'smooth',duration: 2000 });
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
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                padding: 0,
                width: "8rem",
                justifyContent: "left",
                marginLeft: "1.9rem",
                marginTop:"2rem",
                marginBottom:"1rem"
              }}
              classes={{ root: classes.link }}
              href="#contactus"
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
          </Link>
          <Grid
            container
            style={{
              marginLeft: "35.2rem",
              width: "65.3125rem",
              height: "1.8rem",
              marginBottom:"0.8rem"
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
