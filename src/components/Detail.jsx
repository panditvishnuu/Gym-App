import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        ml: { lg: "40px", sx: 0 },
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textAlign={"center"} fontWeight={'bold'}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you Strong. {name} {` `}
          is <br /> one of the best exercises to target your {target}. It will
          help you <br /> improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
                <Stack key={item.name} direction={'row'} gap={'24px'} alignItems={'center'}>
                    <Button sx={{background : '#fff2db', borderRadius : '50%', width : '80px', height : '80px'}}>
                        <img src={item.icon} alt={bodyPart} style={{width : '40px', height : '40px'}}/>
                    </Button>
                    <Typography textTransform='capitalize' variant='h6' fontWeight={'bold'}>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
