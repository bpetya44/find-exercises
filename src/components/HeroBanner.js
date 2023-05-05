import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner1.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px", xs: "20px" },
      }}
      position="relative"
      p="20px"
    >
 
      <Typography
        color="#9c27b0"
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Find Your Exercise
      </Typography>
      <Typography
        color="#6f6f6f"
        fontWeight="400"
        sx={{ fontSize: { lg: "23px", xs: "20px" } }}
        mb={4}
      >
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="#exercises"
        mb="20px"
        sx={{
          backgroundColor: "#9c27b0",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "700",
        }}
      >
        Explore
      </Button>
      <Typography
        mt=""
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: "0.08",
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: "50%",
          left: "13%",
          transform: "rotate(90deg)",
          fontSize: "200px",
          lineHeight: "0.5",
          letterSpacing: "1px",
          zIndex: "-1",
        }}
      >
        Exercise
      </Typography>

      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
