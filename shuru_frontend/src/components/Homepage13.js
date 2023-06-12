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
import DoneIcon from '@mui/icons-material/Done';
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blueGrey } from "@mui/material/colors";
import interRegular from "../static/Inter-Regular.ttf";
import interBold from "../static/Inter-Bold.ttf";
import interExtraBold from "../static/Inter-ExtraBold.ttf";
import interSemiBold from "../static/Inter-SemiBold.ttf";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Done } from "@mui/icons-material";
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
          style={{
            justifyContent: "space-between",
            
            margin: "auto",
            position: "relative",
            maxWidth: "83.75rem",
            marginBottom:'3.325rem'
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
              <Grid item style={{ maxWidth: "20.625rem", padding: 0 ,marginTop:'.6rem'}}>
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
              </Grid>
              
              
            </Grid>
          </Grid>
        <Grid
          container
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
              boxShadow:'none'
            }}
          >
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
            <Grid container
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "4rem",marginTop:'4.3rem',flexWrap:'nowrap'}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                    <DoneIcon/>
                    </Avatar>
                    <Typography
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',fontSize:"1.2rem"  }}
                    >
                      <b>Community Tools: </b><br/>
                      Shuru will be adding multiple features
                      
                        <li>voting</li>
                        <li>memberships</li>
                        <li>design sprints</li>
                      
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" style={{
                    display:"flex",
                    position:"relative",
                    bottom:"7rem",
                    left:"5.25rem",
                    height:"12rem",
                    backgroundColor:"blue"
                  }}/>

                <Grid container
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "4rem",marginTop:'2.8rem',flexWrap:'nowrap',position:"relative",bottom:"10rem"}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                    <DoneIcon/>
                    </Avatar>
                    <Typography
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',fontSize:"1.2rem"  }}
                    >
                      <b>Investing in ideas through Shuru. </b> 
                    </Typography>
                  </Grid>

                  <Divider orientation="vertical" style={{
                    display:"flex",
                    position:"relative",
                    bottom:"10rem",
                    left:"5.25rem",
                    height:"12rem",
                    backgroundColor:"blue"
                  }}/>

                  <Grid container
                    style={{ flexDirection: "row" ,display:'flex',width:"48.125rem",marginLeft: "4rem",marginTop:'2.8rem',flexWrap:'nowrap',position:"relative",bottom:"13rem"}}
                  >
                    <Avatar
                      variant="circular"
                      style={{
                        position: "relative",
                       
                        backgroundColor: "blue",
                        color: "white",
                      }}
                    >
                    <DoneIcon/>
                    </Avatar>
                    <Typography
                      style={{fontFamily:'Inter',fontWeight:500,color:'#292D32',marginLeft:'1.25rem',marginTop:'.1rem',fontSize:"1.2rem"  }}
                    >
                      <b>Share revenue with the community through Shuru. </b>
                    </Typography>
                  </Grid>
              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
     
      </ThemeProvider>
    </>
  );
}

export default HomepageScreen13;
