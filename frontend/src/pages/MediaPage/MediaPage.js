import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import HomeCard from '../../components/HomeCard';
import { formatDate } from '../../utils/Utils';
import PaginationComponent from "../../components/PaginationComponent";
import { fetchMovieGenres, fetchMediaData, fetchSearchResults } from "../../utils/tmdbApi";
import SearchBarComponent from "../../components/SearchBarComponent";

const MediaPage = () => {
  const [selectedType, setSelectedType] = useState("Tout");
  const [movieGenres, setMovieGenres] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    fetchMovieGenres().then((genres) => {
      setMovieGenres(genres);
    }).catch((error) => {
      console.error("Error fetching movie genres:", error);
    });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setSearching(true);
      fetchSearchResults(searchQuery, currentPage)
        .then((data) => {
          setMediaData(data.mediaData);
          setTotalPages(data.totalPages);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => {
          setSearching(false);
        });
    } else {
      fetchMediaData(selectedType, currentPage).then((data) => {
        setMediaData(data.mediaData);
        setTotalPages(data.totalPages);
      }).catch((error) => {
        console.error("Error fetching media data:", error);
      });
    }
  }, [searchQuery, currentPage, selectedType]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  const handleTypeSelect = (event) => {
    const typeId = event.target.value;
    setSelectedType(typeId);
    setSearchQuery(""); 
    setCurrentPage(1); 
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Media Page
      </Typography>
      <SearchBarComponent
      selectedType={selectedType}
      movieGenres={movieGenres}
      searchQuery={searchQuery}
      searching={searching}
      handleTypeSelect={handleTypeSelect}
      handleSearchChange={handleSearchChange}
    />
      <Grid container spacing={0}>
        {mediaData.map((media) => (
          <Grid item xs={6} sm={3} md={4} lg={2} xl={2} key={media.id}>
            <HomeCard 
              title={media.title}
              image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`}
              date={formatDate(media.release_date)}
              note={media.vote_average}
              style={{marginTop:"20px"}}
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
