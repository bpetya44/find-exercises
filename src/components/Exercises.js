import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h5" mb="46px" color="#9c27b0">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { xs: "40px", sm: "122px" },
          mt: { sm: "32px", xs: "20px" },
        }}
        justifyContent="center"
        flexWrap="wrap"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
