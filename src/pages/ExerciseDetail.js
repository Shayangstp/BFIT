import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, FetchData, youtubeOptions } from "../utils/FetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equiomentExercises, setEquiomentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetail = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetail);

      const exerciseVideosData = await FetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await FetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetail.target} `,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExerciseData);
      const equipmentExerciseData = await FetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment} `,
        exerciseOptions
      );
      setEquiomentExercises(equipmentExerciseData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equiomentExercises={equiomentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
