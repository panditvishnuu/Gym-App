import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ Exercises, setExercises, bodypart }) => {
  const [currentPage, setcurrentPage] = useState(1);


  const paginate = (e,value) => {
    setcurrentPage(value);
    window.scrollTo({top : 1800, behavior : 'smooth'});
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if(bodypart === 'all') {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
      } else { 
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExerciseData();
  }, [bodypart]);

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise -exercisesPerPage;
  const currentExercises = Exercises.slice(indexOfFirstExercise,indexOfLastExercise);



  console.log(Exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard keyy={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt={'100px'}>
        {Exercises.length > 9 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(Exercises.length / 3)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
