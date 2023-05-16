import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log({ exerciseVideos });
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" sx={{ textAlign: "center", mb: "20px" }}>
        <span style={{ color: "#9c27b0", textTransform: "capitalize" }}>
          {name} Videos
        </span>
      </Typography>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
        {exerciseVideos.contents?.slice(0, 3).map((video, index) => (
          <Box
            key={index}
            sx={{ width: { xs: "100%", lg: "33%" } }}
            className="exercise-video"
          >
            <Typography mt="20px" ml="20px" variant="h6">
              {video.video.title}
            </Typography>
            <Typography color="#9c27b0" ml="20px">
              {video.video.channelName}
            </Typography>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.video.videoId}`}
              title={video.video.title}
              allowFullScreen
            ></iframe>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos