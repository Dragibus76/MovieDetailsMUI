import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import HomeCardSection from "../../components/HomeCardSection";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Bienvenue sur MovieDetails
      </Typography>
      <Grid container spacing={2}>
        {/* Première partie (90% de la largeur) */}
        <Grid item xs={12} md={10}>
          {/* Votre cartouche */}
          <HomeCardSection />
        </Grid>

        {/* Deuxième partie (10% de la largeur) */}
        <Grid item xs={12} md={2}>
          {/* Contenu de la deuxième partie */}
          <p>comment</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
