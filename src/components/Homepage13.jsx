import React from "react";
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
  Divider,
  Step,
  Stepper,
  StepLabel,
  Box,
} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import DoneIcon from "@mui/icons-material/Done";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blueGrey } from "@mui/material/colors";
import interRegular from "../static/Inter-Regular.ttf";
import interBold from "../static/Inter-Bold.ttf";
import interExtraBold from "../static/Inter-ExtraBold.ttf";
import interSemiBold from "../static/Inter-SemiBold.ttf";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Done } from "@mui/icons-material";
import { fontWeight } from "@mui/system";
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
  },
  "@font-face": {
    fontFamily: "Inter",
    src: `
      url(${interRegular}) format('truetype'),
      url(${interBold}) format('truetype'),
      url(${interExtraBold}) format('truetype')
      url(${interSemiBold}) format('truetype')
    `,
    fontWeight: "normal",
    fontStyle: "normal",
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
function HomepageScreen13() {
  const theme = createTheme({
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
          id="roadmap"
          container
          spacing={1}
          justifyContent="space-between"
          style={{
            margin: "auto",
            position: "relative",
            maxWidth: "83.75rem",
            marginBottom: "3.325rem",
          }}
        >
          <Grid
            item
            style={{
              maxWidth: "48.88%",
              marginTop: "4.375rem",
              padding: 0,

              marginBottom: 0,
            }}
          >
            <Grid item style={{ position: "relative" }}>
              <Typography
                variant="caption"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
                ROADMAP
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              style={{ marginBottom: "0rem", width: "100%", padding: 0 }}
            >
              <Grid
                item
                style={{
                  maxWidth: "20.625rem",
                  padding: 0,
                  marginTop: ".6rem",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    color: "#292D32",
                  }}
                >
                  Roadmap
                </Typography>
                <Typography variant="body1" style={{
                  display:"flex",
                  position:"relative",
                  width:"33rem",
                  fontFamily: "Inter",
                  top:"1.5rem",
                  fontWeight: 400,
                  color: "#292D32",
                }}>
                  Shuru aims to cultivate communities that thrive on their shared passion for ideas. Our roadmap centers around encouraging experimentation, prototyping, and providing a playground for technology and culture to evolve. We envision Shuru as the gateway to a global community, where individuals can collaborate and innovate together. 
                </Typography>
                <Typography variant="body1" style={{
                  display:"flex",
                  position:"relative",
                  width:"33rem",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  color: "#292D32",
                  top:"2.8rem"
                }}>
                  For partnerships or other queries, you can reach out to us at: hello@shuru.io
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            style={{
              width: "56.88%",
              height: "42rem",
              marginTop: "4.175rem",
            }}
          >
            <Card
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                backgroundColor: "white",
                boxShadow: "none",
                overflowY:"auto"
              }}
            >
              <CardContent
                style={{
                  width: "100%",
                  height: "30rem",
                  backgroundColor: "white",
                }}
              >
                <div style={{
                  height:"48rem"
                }}>
                  {/*<Typography variant="h3" style={{
                    display:"flex",
                    position:"relative",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    top:"1rem",
                    left:"3.3rem"
                  }}>
                    Community
                  </Typography>

                  {/*1st point */}
                  <Avatar
                      variant="circular"
                      style={{
                        display:"flex",
                        position: "relative",
                        backgroundColor: "blue",
                        color: "white",
                        top:"3.5rem",
                        left:"2.8rem"
                      }}
                    ><DoneIcon/>
                    </Avatar>
                    <div style={{
                      display:"flex",
                      position:"relative",
                      flexDirection:"column",
                      left:"7rem",
                      top:"0.7rem"
                    }}>
                    <Typography variant="h5" style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}>
                      Interface<br/>
                    </Typography>
                    <Typography variant="body1" style={{
                      fontFamily:"Inter",
                      fontWeight:"400"
                    }}>
                    Core platform infrastructure and user interface.

                    </Typography>
                    </div>

                    <Divider orientation="vertical" style={{
                      height:"6rem",margin:"0rem",padding:"0rem",
                      backgroundColor:"blue",
                      display:"flex",
                      position:"relative",
                      bottom:"1rem",
                      left:"4.1rem"
                    }}/>
                    {/* 2nd point */}
                    <Avatar
                      variant="circular"
                      style={{
                        display:"flex",
                        position: "relative",
                        backgroundColor: "white",
                        color: "blue",
                        bottom:"1rem",
                        left:"2.8rem",
                        border: "solid"
                      }}
                    ><Typography style={{fontSize:"1.2rem",color:"blue"}}>02</Typography>
                    </Avatar>
                    <div style={{
                      display:"flex",
                      position:"relative",
                      flexDirection:"column",
                      left:"7rem",
                      bottom:"3.8rem"
                    }}>
                    <Typography variant="h5" style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}>
                      Partnerships<br/>
                    </Typography>
                    <Typography variant="body1" style={{
                      fontFamily:"Inter",
                      fontWeight:"400",
                      width:"32rem"
                    }}>
                    Establish partnerships with early adopters and gather feedback for future improvements.
                    </Typography>
                    </div>
                    <Divider orientation="vertical" style={{
                      height:"6rem",margin:"0rem",padding:"0rem",
                      backgroundColor:"blue",
                      display:"flex",
                      position:"relative",
                      bottom:"6.1rem",
                      left:"4.12rem"
                    }}/>
                    {/* 3rd point */}

                    <Avatar
                      variant="circular"
                      style={{
                        display:"flex",
                        position: "relative",
                        backgroundColor: "white",
                        color: "blue",
                        bottom:"6.1rem",
                        left:"2.8rem",
                        border:"solid"
                      }}
                    ><Typography style={{fontSize:"1.2rem",color:"blue"}}>03</Typography>
                    </Avatar>
                    <div style={{
                      display:"flex",
                      position:"relative",
                      flexDirection:"column",
                      left:"7rem",
                      bottom:"8.8rem"
                    }}>
                    <Typography variant="h5" style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}>
                      Voting<br/>
                    </Typography>
                    <Typography variant="body1" style={{
                      fontFamily:"Inter",
                      fontWeight:"400",
                      width:"32rem"
                    }}>
                    Introduce voting, allowing users to participate in decision-making processes within their communities.

                    </Typography>
                    </div>

                    <Divider orientation="vertical" style={{
                      height:"6rem",margin:"0rem",padding:"0rem",
                      backgroundColor:"blue",
                      display:"flex",
                      position:"relative",
                      bottom:"11.2rem",
                      left:"4.12rem"
                    }}/>

                    {/* 4th point */}
                    <Avatar
                      variant="circular"
                      style={{
                        display:"flex",
                        position: "relative",
                        backgroundColor: "white",
                        color: "blue",
                        bottom:"11.2rem",
                        left:"2.8rem",
                        border:"solid"
                      }}
                    ><Typography style={{fontSize:"1.2rem",color:"blue"}}>04</Typography>
                    </Avatar>
                    <div style={{
                      display:"flex",
                      position:"relative",
                      flexDirection:"column",
                      left:"7rem",
                      bottom:"14rem"
                    }}>
                    <Typography variant="h5" style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}>
                      Launch communities<br/>
                    </Typography>
                    <Typography variant="body1" style={{
                      fontFamily:"Inter",
                      fontWeight:"400",
                      width:"32rem"
                    }}>
                    Launch communities, enabling users to join and actively engage with communities aligned with their interests.

                    </Typography>
                    </div>

                    <Divider orientation="vertical" style={{
                      height:"6rem",margin:"0rem",padding:"0rem",
                      backgroundColor:"blue",
                      display:"flex",
                      position:"relative",
                      bottom:"16.3rem",
                      left:"4.12rem"
                    }}/>

                    {/* 5th point */}
                    <Avatar
                      variant="circular"
                      style={{
                        display:"flex",
                        position: "relative",
                        backgroundColor: "white",
                        color: "blue",
                        bottom:"16.7rem",
                        left:"2.8rem",
                        border:"solid"
                      }}
                    ><Typography style={{fontSize:"1.2rem",color:"blue"}}>05</Typography>
                    </Avatar>
                    <div style={{
                      display:"flex",
                      position:"relative",
                      flexDirection:"column",
                      left:"7rem",
                      bottom:"19.6rem"
                    }}>
                    <Typography variant="h5" style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                    }}>
                      Design Sprints<br/>
                    </Typography>
                    <Typography variant="body1" style={{
                      fontFamily:"Inter",
                      fontWeight:"400",
                      width:"32rem"
                    }}>
                    Conduct design sprints, facilitating collaborative problem-solving sessions for community members to ideate and create innovative solutions.

                    </Typography>
                    </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen13;
