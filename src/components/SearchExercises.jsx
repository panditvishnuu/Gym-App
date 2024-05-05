import { Box, Stack, Typography, TextField,Button } from "@mui/material";
import HorizontalScrollBar from './HorizontalScrollBar';
import React, { useState, useEffect } from "react";
import { fetchData,exerciseOptions} from "../utils/fetchData";

const SearchExercises = ({setExercises,bodypart,setBodypart}) => {
  const [search, setsearch] = useState('');
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setbodyParts(['all', ...bodyPartsData]);
    }
    fetchExerciseData();
  },[]);


  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search) || 
      exercise.target.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search))
      setsearch("");
      setExercises(searchedExercises);
    }
    console.log(exerciseData);
  }
  return (
    <Stack justifyContent={"center"} alignItems={"center"} p={"20px"}>
      <Typography
        fontSize={"26px"}
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: { xs: "20px", md: "35px" },
        }}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box>
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className ='search-btn'
        sx={{
          bgcolor : '#ff2625',
          color : '#fff',
          textTransform : 'none',
          width : {lg : '175px', xs : '80px'},
          fontSize : {lg : '20px', xs : '14px'},
          height : '56px'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position : 'relative', width : '100%' , padding : '20px'}}>
           <HorizontalScrollBar data={bodyParts} bodypart = {bodypart} setBodyparts = {setBodypart} isbodyParts />
        
      </Box>
    </Stack>
  );
};

export default SearchExercises;
