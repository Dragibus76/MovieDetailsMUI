import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMediaDetails } from "../utils/tmdbApi";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  Divider,
  Rating,
} from "@mui/material";
import {
  InfoContainer,
  TypographyWeightTitle,
  TypographyNormalTitle,
  TypographyCategory,
} from "../Styles/MediaDetailsPageStyled";
import PersonCard from "../components/PersonCard";

const MediaDetailsPage = () => {
  const { mediaType, mediaId } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);

  useEffect(() => {
    fetchMediaDetails(mediaId, mediaType)
      .then((data) => {
        setMediaDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching media details:", error);
      });
  }, [mediaId, mediaType]);

  if (!mediaDetails) {
    return <div>Loading...</div>;
  }

  const genresWithCommas = mediaDetails.genres
    .map((genre) => genre.name)
    .join(", ");

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Card style={{ objectFit: "cover", marginTop: "20px" }}>
            <CardMedia
              component="img"
              alt={
                mediaType === "movie" ? mediaDetails.title : mediaDetails.name
              }
              height={mediaType === "movie" ? 600 : "500px"}
              width="100%"
              image={`https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path}`}
              style={{ objectFit: "cover" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Divider textAlign="left">Informations</Divider>
          <Container>
            <InfoContainer>
              <TypographyWeightTitle variant="body1">
                {mediaDetails.title}
              </TypographyWeightTitle>
              <Rating value={mediaDetails.vote_average / 2} precision={0.5} />
            </InfoContainer>
            <InfoContainer>
              <TypographyCategory>{genresWithCommas}</TypographyCategory>
            </InfoContainer>

           

          </Container>
          <Container>
            <InfoContainer>
              <TypographyNormalTitle textAlign="left">
                {mediaDetails.overview}
              </TypographyNormalTitle>
            </InfoContainer>
          </Container>
        </Grid>
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Acteurs</Divider>
          <PersonCard
            movieId={mediaId}
            mediaType={mediaType === "films" ? "movie" : "tv"}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Production</Divider>
          Production
        </Grid>
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Poster & Backdrop</Divider>
          Poster & Backdrop
        </Grid>
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Recommendations</Divider>
          Recommendations
        </Grid>
      </Grid>
    </Container>
  );
};

export default MediaDetailsPage;
