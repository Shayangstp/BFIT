import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizantalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equiomentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h4" mb={5} ml={3}>
        Exercises that target the same muscle group
        <Stack direction="row" sx={{ p: "2", position: " relative" }}>
          {targetMuscleExercises.length !== 0 ? (
            <HorizontalScrollBar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
      <Typography variant="h4" mb={5} ml={3}>
        Exercises that use the same equipment
        <Stack direction="row" sx={{ p: "2", position: " relative" }}>
          {equiomentExercises.length !== 0 ? (
            <HorizontalScrollBar data={equiomentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Typography>
    </Box>
  );
};

export default SimilarExercises;
