import React from "react";
import { Box } from "@mui/material";
import Bodypart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodypart, setBodyparts, isbodyParts }) => {
  return (
    <div style={{display : "flex", overflow : 'auto', paddingTop : '7px', overflowY : 'hidden'}}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isbodyParts ? <Bodypart item={item} bodypart={bodypart} setbodypart={setBodyparts} /> : <ExerciseCard exercise = {item}/>}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
