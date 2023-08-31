import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMediaDetails, fetchWatchProviders } from "../utils/tmdbApi";
import { Grid, Container, Divider } from "@mui/material";
import PersonCard from "../components/PersonCard";
import ProductionCompanyComponent from "../components/ProductionCompanyComponent"; 
import AdditionalInfoComponent from "../components/AdditionalInfoComponent";
import AboutMediaComponent from "../components/AboutMediaComponent";
import BuyMediaComponent from "../components/BuyMediaComponent";

const MediaDetailsPage = () => {
  const { mediaType, mediaId } = useParams();
  const [mediaDetails, setMediaDetails] = useState(null);
  const [watchProviders, setWatchProviders] = useState([]);

  useEffect(() => {
    fetchMediaDetails(mediaId, mediaType)
      .then((data) => {
        setMediaDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching media details:", error);
      });

      fetchWatchProviders(mediaId, mediaType)
      .then((data) => {
        const franceProviders = data.FR;
        setWatchProviders(franceProviders);
      })
      .catch((error) => {
        console.error("Error fetching watch providers:", error);
      });
  }, [mediaId, mediaType]);

  if (!mediaDetails) {
    return <div>Loading...</div>;
  }
  console.log(watchProviders);
  return (
    <Container maxWidth="xl" style={{marginTop:"1rem"}}>
      <Grid container spacing={2}>
        <AboutMediaComponent
          mediaDetails={mediaDetails}
          mediaType={mediaType}
        />
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Acteurs</Divider>
          <PersonCard
            movieId={mediaId}
            mediaType={mediaType === "films" ? "movie" : "tv"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Divider textAlign="left">Société de Production</Divider>
          <ProductionCompanyComponent
            productionCompanies={mediaDetails.production_companies}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Poster & Backdrop</Divider>
          Poster & Backdrop
        </Grid>
        <Grid item xs={12} md={3}>
          <Divider textAlign="left">Informations Supplémentaires</Divider>
          <AdditionalInfoComponent mediaDetails={mediaDetails} />
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Divider textAlign="left">Recommendations</Divider>
          Recommendations
        </Grid>

        <Grid item xs={12} md={3}>
          <Divider textAlign="left">Louer ou acheter</Divider>
          <BuyMediaComponent watchProviders={watchProviders} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MediaDetailsPage;
