import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ ExerciseVideos, name }) => {
  console.log('viii');
  console.log(ExerciseVideos);
  //if(!ExerciseVideos.length) return 'Loading...';
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p={"20px"}>
      <Typography variant="h3" mb={"33px"}>
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {ExerciseVideos?.slice(0,3).map((item, index) => (
          <a key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="blank"
          rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
