import React from 'react'
import { Box, Stack,Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt : {lg : '100px',xs: '0'}}}>
      <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} mt={'20px'}>
        Exercises that target the Same Muscle Group
      </Typography>
      <Stack direction={'row'} sx={{p : '2', position : 'relative', mt : {lg : '40px', xs: '20px'}}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>

      <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} mt={'50px'}>
        Exercises that use the Same Equipment
      </Typography>
      <Stack direction={'row'} sx={{p : '2', position : 'relative', mt : {lg : '40px', xs: '20px'}}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
