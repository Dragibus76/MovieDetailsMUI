import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import HomeCard from "../../components/HomeCard";
import { formatDate } from "../../utils/Utils";
import PaginationComponent from "../../components/PaginationComponent";
import { fetchMediaGenres, fetchMediaData, fetchSearchResults } from "../../utils/tmdbApi";
import SearchBarComponent from "../../components/SearchBarComponent";
import { useParams } from "react-router-dom";
import { StyledheaderTextDivider } from '../../Styles/MediaPageStyled';

const MediaPage = () => {
  const { mediaType } = useParams();
  const [selectedType, setSelectedType] = useState("Tout");
  const [mediaGenres, setMediaGenres] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [latestMedia, setLatestMedia] = useState(null);

  useEffect(() => {
    fetchMediaGenres(mediaType)
      .then((genres) => {
        setMediaGenres(genres);
      })
      .catch((error) => {
        console.error("Error fetching media genres:", error);
      });
  }, [mediaType]);

  useEffect(() => {
    if (searchQuery) {
      setSearching(true);
      fetchSearchResults(searchQuery, currentPage, mediaType)
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
      fetchMediaData(mediaType, selectedType, currentPage)
        .then((data) => {
          setMediaData(data.mediaData);
          setTotalPages(data.totalPages);
        })
        .catch((error) => {
          console.error("Error fetching media data:", error);
        });
    }
  }, [searchQuery, currentPage, selectedType, mediaType]);

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
        <StyledheaderTextDivider textAlign="center">Rechercher ou trier {mediaType === "films" ? "un film" : "une série"}</StyledheaderTextDivider>
      <SearchBarComponent
        selectedType={selectedType}
        mediaGenres={mediaGenres}
        searchQuery={searchQuery}
        searching={searching}
        handleTypeSelect={handleTypeSelect}
        handleSearchChange={handleSearchChange}
      />
      <Grid container spacing={0}>
        {mediaData.map((media) => (
          <Grid item xs={6} sm={3} md={4} lg={2} xl={2} key={media.id}>
            <HomeCard
              title={media.title || media.name}
              image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path} `}
              date={formatDate(media.release_date || media.first_air_date)}
              note={media.vote_average}
              commentCount={"10"}
              style={{ margin: "auto" }}
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
