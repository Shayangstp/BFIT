import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [exrcises, setExrcises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExrcises={setExrcises}
      />
      <Exercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExrcises={setExrcises}
      />
    </Box>
  );
};

export default Home;
