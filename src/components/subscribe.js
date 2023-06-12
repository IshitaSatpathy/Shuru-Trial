import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button, Card, CardContent} from "@material-ui/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Bottomheaderscreen from "./bottomheader";
import interRegular from '../static/Inter-Regular.ttf';
import interBold from '../static/Inter-Bold.ttf';
import interExtraBold from '../static/Inter-ExtraBold.ttf';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grid } from "@mui/system";
import subs from "../images/subs.png";
import Ack from "./acknow";
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
  '@font-face': {
    fontFamily: 'Inter',
    src: `
      url(${interRegular}) format('truetype'),
      url(${interBold}) format('truetype'),
      url(${interExtraBold}) format('truetype')
    `,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  notchedOutline: {
    borderColor: "#EDEEF1",
  },
  semicircleleft1: {
    width: "13.575rem",
    height: "10.5875rem",
    borderTopRightRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
   
  },
  semicircleleft2: {
    width:"13.575rem",
    height: "10.5875rem",
    borderBottomRightRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    
  },
  semicircleright1: {
    width: "13.575rem",
    height: "10.5875rem",
    borderTopLeftRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    marginLeft:'3.77rem'
    
  },
  semicircleright2: {
    width: "13.575rem",
    height: "10.5875rem",
    borderBottomLeftRadius: "100% 100%",
    backgroundColor: "#0124F1",
    position: "relative",
    marginLeft:'3.77rem'
    
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
function Subscribe() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const [email,setEmail]=useState("");

  const handleEmailSubmit=async(e)=>{
    try {
      const response = await axios.post('http://localhost:8000/postemail/', {
        email_id: email,
      });
      if(response.status==201){
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
     <ThemeProvider theme={theme}>

    {isSubmitted ? (
      <Ack/>
    ) : (
      <Grid container spacing={1} 
      style={{
        justifyContent:"center",
        height:"45rem",
        alignItems:"center"
      }}>

        <Grid item xs={6} id="subscribe">
          <Typography variant="h2" style={{display:"flex",position:"relative",left:"17rem",bottom:"4rem"}}>
            <b>Subscribe to Shuru, <br/> your community.</b>
          </Typography>
          <Typography variant="body1" style={{display:"flex",position:"relative",left:"17.5rem",bottom:"3rem"}}>
            No Spam emails. We'll only notify you when we are ready.
          </Typography>

          <TextField
                      id="email"
                      name="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      label="Enter your email"
                      variant="standard"
                      required
                      style={{
                        display:"flex",
                        position:"relative",
                        left:"17.5rem",
                        width:"25rem",
                        bottom:"1rem",
                      }}
                      InputProps={{
                        disableUnderline:"true",
                        style: {
                          backgroundColor: "white",
                          borderRadius: ".75rem",
                          borderColor: "#EDEEF1",
                          outline: "none",
                          height:"3rem",
                          padding:"1rem"
                          
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => {
                        setIsSubmitted(true);
                        handleEmailSubmit();
                      }}
                      
                      style={{
                        backgroundColor: "#292D32",
                        width:"25rem",
                        display:"flex",
                        position:"relative",
                        left:"17.5rem",
                       
                        borderRadius: ".75rem",
                      }}
                    ><Typography variant="body1" style={{fontFamily:'Inter',fontWeight:800,color:'white',padding:'.3rem'}}>
                      Submit</Typography>
                    </Button>

        </Grid>
        <Grid item xs={6}>
          <img src={subs} style={{width:"30rem",height:"25rem",display:"flex",position:"relative",bottom:"2rem"}}/>
        </Grid>
      </Grid>
      ) }
      </ThemeProvider>
    </>
  );
}

export default Subscribe;


