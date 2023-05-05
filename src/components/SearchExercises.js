import { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    const getExercises = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(bodyPartsData);
      setBodyParts(["all", ...bodyPartsData]);
    };
    getExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exerciseData);

      const searchedExercises = exerciseData.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
        );
      });
      console.log(searchedExercises);
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      justifyContent="center"
      p="20px"
      sx={{
        alignItems: { sm: "left", lg: "center" },
        marginTop: { sm: "25px", lg: "25%" },
      }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          ml: { sm: "50px", xs: "20px" },
        }}
        mb="50px"
        textAlign="left"
        color="#9c27b0"
      >
        Best Impact Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontSize: "24px",
              fontWeight: "700",
              color: "#9c27b0",
              border: "none",
            },
            width: { lg: "1100px", xs: "350px" },
            backgroundColor: "#fff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises"
          type="text"
        />
        <Button
          className="search-button"
          variant="contained"
          color="secondary"
          href="#exercises"
          mb="20px"
          sx={{
            backgroundColor: "#9c27b0",
            padding: "15px",
            borderRadius: "10px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            fontWeight: "700",
            width: { lg: "200px", xs: "100px" },
            height: { lg: "70px", xs: "70px" },
            position: "absolute",
            right: "0px",
          }}
          onClick={() => {
            handleSearch(search);
          }}
        >
          Search
        </Button>
      </Box>

      {/* display body parts as cards */}
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
            data={bodyParts} 
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
