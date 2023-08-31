import React from "react";
import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Rating,
} from "@mui/material";
import {
  InfoContainer,
  TypographyWeightTitle,
  TypographyNormalTitle,
  TypographyCategory,
  TypographyRuntime,
  IconContainer,
  TypographyTagline
} from "../Styles/MediaDetailsPageStyled";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const AboutMediaComponent = ({ mediaDetails, mediaType }) => {
  const genresWithCommas = mediaDetails.genres
    .map((genre) => genre.name)
    .join(", ");

  return (
    <Grid container spacing={2} style={{marginTop:"1rem"}}>
      <Grid item xs={12} md={9}>
        <Card style={{ objectFit: "cover", marginLeft: "1rem" }}>
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
        <Container style={{ paddingTop: "1rem" }}>
          <Divider textAlign="left">A Propos</Divider>
          <InfoContainer>
            <TypographyWeightTitle variant="body1">
              {mediaDetails.title}
            </TypographyWeightTitle>
            <Rating
              value={mediaDetails.vote_average / 2}
              precision={0.5}
              style={{ paddingTop: "1rem" }}
            />
          </InfoContainer>
          <TypographyTagline variant="body1">
            "{mediaDetails.tagline}"
          </TypographyTagline>
          <InfoContainer>
            <TypographyCategory>{genresWithCommas}</TypographyCategory>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <AccessTimeIcon/>
              <TypographyRuntime>{mediaDetails.runtime} minutes</TypographyRuntime>
            </IconContainer>
          </InfoContainer>
        </Container>
        <Container>
          <InfoContainer>
            <TypographyNormalTitle
              textAlign="left"
              style={{ paddingTop: "1rem" }}
            >
              {mediaDetails.overview}
            </TypographyNormalTitle>
          </InfoContainer>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AboutMediaComponent;
