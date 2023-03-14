import React, { useState, useEffect } from "react";
import { Stack, Button, Typography, TextField, Box } from "@mui/material";
import { exerciseOptions, FetchData } from "../utils/FetchData";
import HorizantalScrollBar from "./HorizantalScrollBar";

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

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sx: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              borderRadius: "4px",
              border: "none",
            },
            width: { lg: "800px", sx: "350px" },
            background: "#fff",
            borderRadius: "400px",
          }}
          label="Search Exercises"
          color="error"
          type="text"
          height="76px"
          value={search}
          onChange={onChangeHandler}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2526",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            right: "0",
            "&:hover": { backgroundColor: "transparent" },
          }}
          onClick={searchHandler}
        >
          Search
        </Button>
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
