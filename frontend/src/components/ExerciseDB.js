import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import gymIcon from "../assets/icons/gym.png";
import targetIcon from "../assets/icons/target.png";
import bodyPartIcon from "../assets/icons/body-part.png";
import equipmentIcon from "../assets/icons/equipment.png";

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ExercisePage = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);
  const [fallbackImages, setFallbackImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMuscleChange = (e) => {
    setSelectedMuscle(e.target.value);
  };

  useEffect(() => {
    if (selectedMuscle) {
      handleSearch();
    }
  }, [selectedMuscle]);

  const fetchFallbackImage = async (bodyPart) => {
    try {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        headers: {
          "X-RapidAPI-Key": "9b216aa69bmshc37e5e62f8bc15ep17ca3ejsnb499bfc6f146",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      if (response.data && response.data.length > 0) {
        return response.data[0].gifUrl;
      }
    } catch (error) {
      console.error(`Failed to fetch fallback image for ${bodyPart}:`, error);
    }
    return gymIcon;
  };

  const handleSearch = async () => {
    if (!selectedMuscle) {
      setError("Please select a muscle group first.");
      return;
    }

    setLoading(true);
    setError("");
    setCurrentPage(1);

    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedMuscle}`,
      headers: {
        "X-RapidAPI-Key": "9b216aa69bmshc37e5e62f8bc15ep17ca3ejsnb499bfc6f146",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
      if (response.data.length === 0) {
        setError("No exercises found for the selected muscle group.");
      }

      // Pre-fetch fallback images for each exercise's body part
      const fallbackPromises = response.data.map(async (exercise) => {
        if (exercise.bodyPart && exercise.bodyPart !== selectedMuscle) {
          const fallbackUrl = await fetchFallbackImage(exercise.bodyPart);
          return { [exercise.id]: fallbackUrl };
        }
        return {};
      });

      const fallbackResults = await Promise.all(fallbackPromises);
      const newFallbackImages = Object.assign({}, ...fallbackResults);
      setFallbackImages(newFallbackImages);
    } catch (error) {
      console.error("API Error:", error);
      setError("Failed to fetch exercises. Please check your internet connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#ffffff' }}>
        Search For A Perfect Exercise
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel>Select A Muscle Group</InputLabel>
          <Select
            value={selectedMuscle}
            onChange={handleMuscleChange}
            label="Select A Muscle Group"
          >
            <MenuItem value="">
              <em>Select A Muscle Group</em>
            </MenuItem>
            <MenuItem value="back">Back</MenuItem>
            <MenuItem value="cardio">Cardio</MenuItem>
            <MenuItem value="chest">Chest</MenuItem>
            <MenuItem value="lower%20arms">Lower Arms</MenuItem>
            <MenuItem value="lower%20legs">Lower Legs</MenuItem>
            <MenuItem value="neck">Neck</MenuItem>
            <MenuItem value="shoulders">Shoulders</MenuItem>
            <MenuItem value="upper%20arms">Upper Arms</MenuItem>
            <MenuItem value="upper%20legs">Upper Legs</MenuItem>
            <MenuItem value="waist">Waist</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : currentExercises.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {currentExercises.map((exercise) => (
              <Grid item xs={12} sm={6} md={4} key={exercise.id}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={exercise.gifUrl}
                    alt={exercise.name}
                    sx={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = fallbackImages[exercise.id] || gymIcon;
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {capitalizeFirstLetter(exercise.name)}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <img src={targetIcon} alt="target" style={{ width: 16, height: 16, marginRight: 8 }} />
                      <Typography variant="body2" color="text.secondary">
                        Target: {exercise.target ? capitalizeFirstLetter(exercise.target) : 'N/A'}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <img src={equipmentIcon} alt="equipment" style={{ width: 16, height: 16, marginRight: 8 }} />
                      <Typography variant="body2" color="text.secondary">
                        Equipment: {exercise.equipment ? capitalizeFirstLetter(exercise.equipment) : 'N/A'}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={bodyPartIcon} alt="body part" style={{ width: 16, height: 16, marginRight: 8 }} />
                      <Typography variant="body2" color="text.secondary">
                        Body Part: {exercise.bodyPart ? capitalizeFirstLetter(exercise.bodyPart) : 'N/A'}
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
          {exercises.length > exercisesPerPage && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Pagination
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </>
      ) : !loading && !error ? (
        <Typography variant="h6" align="center" sx={{ color: '#b0b0b0' }}>
          Exercises and demonstrations will be displayed here.
        </Typography>
      ) : null}
    </Box>
  );
};

export default ExercisePage;
