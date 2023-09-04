import React from "react";
import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Rating,
  Button,
  IconButton
} from "@mui/material";
import {
  InfoContainer,
  TypographyWeightTitle,
  TypographyNormalTitle,
  TypographyCategory,
  TypographyRuntime,
  IconContainer,
  TypographyTagline,
  FavoriteListIconContainer,
  ListIconFavorite,
  ListIconWatchList
} from "../Styles/MediaDetailsPageStyled";
import VideocamIcon from '@mui/icons-material/Videocam';

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
          <Container>
        </Container>
          <InfoContainer>
            <TypographyWeightTitle variant="body1">
              {mediaDetails.title || mediaDetails.name}
            </TypographyWeightTitle>
          </InfoContainer>
          <TypographyTagline variant="body1">
            {mediaDetails.tagline || null}
          </TypographyTagline>
          <InfoContainer>
            <TypographyCategory>{genresWithCommas}</TypographyCategory>
          </InfoContainer>
          <InfoContainer>
            <IconContainer>
              <TypographyRuntime>{mediaDetails.runtime || `${mediaDetails.episode_run_time} minutes • ${mediaDetails.number_of_seasons} Saisons • ${mediaDetails.number_of_episodes} Episodes`} </TypographyRuntime>
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
        <Container>
          <InfoContainer>
          <Button style={{margin:"10px auto"}} variant="contained" size="small" endIcon={<VideocamIcon />}>
          Bande Annonce
        </Button>
          </InfoContainer>
        </Container>
        <Divider/>

        <FavoriteListIconContainer>
          <div>
          <Rating
              value={mediaDetails.vote_average / 2}
              precision={0.5}
              style={{ paddingTop: "0.5rem" }}
            />
          </div>
          <div>
          <IconButton>
            <ListIconFavorite/>
          </IconButton>
          <IconButton>
            <ListIconWatchList/>
          </IconButton>
          </div>
        </FavoriteListIconContainer>
      </Grid>
    </Grid>
  );
};

export default AboutMediaComponent;
