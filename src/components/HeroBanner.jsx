import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p={"20px"}
    >
      <Box sx={{marginTop : {xs : 0, md : '-110px'}, marginLeft: {xs : '50px', md : '200px'}}}>
        <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" }, mb : '20px'}}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography lineHeight={"35px"} fontSize={"20px"} mb={5}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="exercises" sx={{backgroundColor : '#ff2625', padding:'10px', mb : {xs : 0, md : '50px'}}}>
        EXPLORE EXERCISES
      </Button>
      </Box>
      <Typography
        sx={{
          opacity: 0.2,
          fontSize: "200px",
          display: { lg: "block", xs: "none" },
        }}
        fontWeight={600}
        color={"#ff2625"}
      >
        EXERCISES
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
