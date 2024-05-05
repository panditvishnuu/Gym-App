import React, { useState } from "react";
import { Box } from "@mui/material";
import { SearchExercises, HeroBanner, Exercises } from "./";

const Home = () => {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setexercises}
        bodypart={bodyPart}
        setBodypart={setbodyPart}
      />
      <Exercises
        Exercises={exercises}
        setExercises={setexercises}
        bodypart={bodyPart}
      />
    </Box>
  );
};

export default Home;
