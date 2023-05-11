import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Button
          sx={{
            ml: "21px",
            color: "fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "uppercase",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "fff",
            background: "#c0c8e8",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "uppercase",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        variant="h6"
        sx={{
          mt: "20px",
          ml: "20px",
          
          fontSize: "20px",
          fontWeight: "bold",
          pb: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard