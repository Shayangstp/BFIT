import React from "react";
import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import classes from "./HeroBanner.module.css";
import heroBanner from "../assets/images/banner.jpg";

const HeroBanner = () => {
  const theme = createTheme({
    palette: {
      primary: lightBlue,
    },
  });

  return (
    <div className={classes.container}>
      <Box
        width="100%"
        position="relative"
        height="900px"
        m="0"
        zIndex="-1"
        id="home"
      >
        <div className={classes.heroText}>NO Pain NO Gain</div>
        <div className={classes.heroTextQoute}>
          “Your body can stand almost anything. It’s your mind that you have to
          convince.”
          <br /> “Once you are exercising regularly, the hardest thing is to
          stop it.” <br />
          “Rome wasn’t built in a day, but they worked on it every single day.”
        </div>
        <img src={heroBanner} className="hero-banner-img" />
      </Box>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: "1",
            cursor: "pointer",
          }}
        >
          <a href="#search" className={classes.link}>
            Just Do it
          </a>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default HeroBanner;
