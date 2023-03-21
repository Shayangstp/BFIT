import React, { useState, useEffect } from "react";
import { Stack, Button, Typography, TextField, Box } from "@mui/material";
import { exerciseOptions, FetchData } from "../utils/FetchData";
import HorizantalScrollBar from "./HorizantalScrollBar";
import classes from "./SearchExercises.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  //auto load categories

  useEffect(() => {
    const fetchexerciseData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchexerciseData();
  }, []);

  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchHandler = async () => {
    if (search) {
      const exerciseData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchExercises);
    }
  };

  const theme = createTheme({
    palette: {
      primary: lightBlue,
    },
  });

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p="20px"
      mt="37px"
      id="search"
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { sm: "44px", sx: "30px" } }}
        mt="80px"
        mb="50px"
        textAlign="center"
        fontFamily="inherit"
      >
        <div className={classes.text}>
          Awesome Exercises You <br /> Should Know
        </div>
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          variant="standard"
          sx={{
            input: {
              fontFamily: "inherit",
              fontWeight: "700",
              borderRadius: "1px",
              border: "none",
              color: "#000",
            },
            width: { sm: "600px", xs: "350px" },
            background: "transparent",
          }}
          label="Search Exercises"
          color="primary"
          type="text"
          height="76px"
          value={search}
          onChange={onChangeHandler}
        />
        <ThemeProvider theme={theme}>
          <Button
            // className="search-btn"
            variant="outlined"
            sx={{
              textTransform: "none",
              width: { lg: "100px", xs: "80px" },
              height: "40px",
              fontSize: { lg: "14px", xs: "14px" },
              position: "absolute",
              bottom: "10px",
              right: "0",
              fontFamily: "inherit",
              // fontWeight: "700",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={searchHandler}
          >
            <SearchIcon />
          </Button>
        </ThemeProvider>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizantalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
