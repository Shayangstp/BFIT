import React from "react";

import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Stack
        direction="row"
        sx={{
          gap: { sm: "122px", xs: "40px" },

          justifyContent: "space-between",
        }}
        px="20px"
        height="80px"
        alignItems="center"
      >
        <Typography
          color="#000"
          sx={{ ml: "50px" }}
          fontSize="36px"
          fontFamily="fantasy"
          fontWeight="200"
        >
          <a href="#home" className={classes.link}>
            'BFIT
          </a>
        </Typography>

        <Stack
          direction="row"
          gap="40px"
          alignItems="flex-end"
          sx={{
            mr: { xs: "10px", lg: "70px" },
            fontSize: { xs: "13px", sm: "16px" },
          }}
        >
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <a href="#exercises" className={classes.link}>
            Exercises
          </a>
          <Link className={classes.link}>Contact</Link>
          <a href="#search" className={classes.link}>
            Search
          </a>
        </Stack>
      </Stack>
    </nav>
  );
};

export default Navbar;
