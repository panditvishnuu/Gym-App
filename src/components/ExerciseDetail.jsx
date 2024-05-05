import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import {Detail,ExerciseVideos,SimilarExercises} from './';


const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDBurl =  `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBurl}/exercises/exercise/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${id}`, youtubeOptions);
      setexerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(`${exerciseDBurl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      settargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(`${exerciseDBurl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setequipmentExercises(equipmentExerciseData);
    }
    fetchExerciseData();
    console.log(exerciseVideos);
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}/>

      {/* <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/> */}

      <SimilarExercises targetMuscleExercises = {targetMuscleExercises} equipmentExercises = {equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail
