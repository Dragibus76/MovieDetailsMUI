import React, { useState, useEffect } from "react";
import * as tmdbApi from "../utils/tmdbApi";
import {
  StyledCardWrapper,
  StyledList,
  StyledListItem,
  StyledImage,
  StyledContent
} from "../Styles/CalendarCardStyled"; 
import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { formatDate } from "../utils/Utils";

const ReleaseDateCard = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    tmdbApi.fetchUpcomingMovieData()
      .then((movies) => {
        setUpcomingMovies(movies);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <StyledCardWrapper>
       
      <StyledList>
        {upcomingMovies.map((movie) => (
          <StyledListItem key={movie.id}>
            <StyledImage src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
            <StyledContent>
              <h3>{movie.title}</h3>
              <p>Date de sortie : {formatDate(movie.release_date)}</p>
            </StyledContent>
            <IconButton aria-label="Ajouter" color="primary">
              <AddCircleIcon />
            </IconButton>
          </StyledListItem>
        ))}
      </StyledList>
    
    </StyledCardWrapper>
  );
};

export default ReleaseDateCard;
