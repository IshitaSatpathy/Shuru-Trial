import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
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
              height: "10rem",
              display: "block",
              marginLeft: "20.875rem",
              width: "35rem",
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
              marginLeft: "20.875rem",
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
              marginLeft: "50.875rem",
              width: "18rem",
              marginTop: "2rem",
            }}
          />
        </div>
      </div>

      {/*<Grid
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
                      width: "450px",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>
                      <Typography component="div" color="blue" focused style={{ fontSize: "18px", marginBottom:"5px", marginLeft:"5px"}}>
                        First Name:
                      </Typography>
                      <TextField
                        className={classes.TextfieldY}
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <Typography style={{ fontSize: "18px", marginBottom:"5px" , marginLeft:"5px"}} component="div">
                        Last Name:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px" }}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "18px" , marginBottom:"5px",marginLeft:"5px"}} component="div">
                        Email:
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        style={{ width: "100%", backgroundColor:blueGrey[50],borderRadius:"10px"}}
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
                      width: "470px",
                      justifyContent: "space-between",
                      marginTop:"20px"
                    }}
                  >
                    <Typography style={{ fontSize: "18px", marginBottom:"5px" }} component="div">
                      Your Message :
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      multiline
                      rows={14}
                      style={{
                        backgroundColor:blueGrey[50]
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => setIsSubmitted(true)}
                    style={{
                      backgroundColor: "#D3E938",
                      color: "white",
                      borderRadius: "5px",
                      float: "right",
                      width:"120px",
                      marginTop: "10px",
                      boxShadow:"none"
                    }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Grid>
            </Grid>*/}
    </div>
  );
}
