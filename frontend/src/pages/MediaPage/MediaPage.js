import React, { useState, useEffect } from "react";
import { Container, Typography, Select, MenuItem, Grid, TextField } from "@mui/material";
import HomeCard from '../../components/HomeCard';
import { formatDate } from '../../utils/Utils';
import PaginationComponent from "../../components/PaginationComponent";
import { fetchMovieGenres, fetchMediaData } from "../../utils/tmdbApi";

const MediaPage = () => {
  const [selectedType, setSelectedType] = useState("Tout");
  const [movieGenres, setMovieGenres] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovieGenres().then((genres) => {
      setMovieGenres(genres);
    }).catch((error) => {
      console.error("Error fetching movie genres:", error);
    });
  }, []);

  useEffect(() => {
    fetchMediaData(selectedType, currentPage).then((data) => {
      setMediaData(data.mediaData);
      setTotalPages(data.totalPages);
    }).catch((error) => {
      console.error("Error fetching media data:", error);
    });
  }, [selectedType, currentPage]);

  const handleTypeSelect = (event) => {
    const typeId = event.target.value;
    setSelectedType(typeId);
    setCurrentPage(1); // Reset to page 1 when changing type
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Media Page
      </Typography>
      <div style={{ marginBottom: 20 }}>
        <Select
          size="small"
          value={selectedType}
          onChange={handleTypeSelect}
          style={{ marginRight: 20 }}
        >
          <MenuItem value="Tout">Tout</MenuItem>
          {movieGenres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          size="small"
          label="Rechercher"
        /> 
      </div>
      <Grid container spacing={0}>
        {mediaData.map((media) => (
          <Grid item xs={6} sm={3} md={4} lg={2} xl={2} key={media.id}>
            <HomeCard 
              title={media.title}
              image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`}
              date={formatDate(media.release_date)}
              note={media.vote_average}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export default MediaPage;
