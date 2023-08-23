import React, { useState } from "react";
import { Grid, Container, Typography, Tabs, Tab, Avatar } from "@mui/material";
import HomeCardSection from "../../components/HomeCardSection";
import CommentHomeCard from "../../components/CommentHomeCard";
import HomeCommentSection from "../../components/HomeCommentSection";



const Home = () => {
  const [activeTabFilms, setActiveTabFilms] = useState(0);
  const [activeTabSeries, setActiveTabSeries] = useState(0);

  const handleTabChangeFilms = (event, newValue) => {
    setActiveTabFilms(newValue);
  };

  const handleTabChangeSeries = (event, newValue) => {
    setActiveTabSeries(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h6" gutterBottom>
        Bienvenue sur MovieDetails
      </Typography>
      <Grid container spacing={2}>
        {/* Première partie (90% de la largeur) */}
        <Grid item xs={12} md={9}>
          <Tabs
            value={activeTabFilms}
            onChange={handleTabChangeFilms}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="En ce Moment" />
            <Tab label="Films Populaire" />
            <Tab label="Films Les mieux Notés" />
            <Tab label="Prochaine Sorties" />
          </Tabs>
          {activeTabFilms === 0 && <HomeCardSection category="en_ce_moment" />}
          {activeTabFilms === 1 && <HomeCardSection category="populaire" />}
          {activeTabFilms === 2 && <HomeCardSection category="mieux_notes" />}
          {activeTabFilms === 3 && (
            <HomeCardSection category="prochaine_sorties" />
          )}
          <Tabs
            value={activeTabSeries}
            onChange={handleTabChangeSeries}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Diffusé Aujourd'hui" />
            <Tab label="En ce moment sur les plateforme" />
            <Tab label="Series les plus Populaires" />
            <Tab label="Series les mieux Notés" />
          </Tabs>
          {activeTabSeries === 0 && (
            <HomeCardSection category="diffuse_aujourdhui" />
          )}
          {activeTabSeries === 1 && (
            <HomeCardSection category="en_ce_moment_plateforme" />
          )}
          {activeTabSeries === 2 && (
            <HomeCardSection category="populaires_series" />
          )}
          {activeTabSeries === 3 && (
            <HomeCardSection category="mieux_notes_series" />
          )}
        </Grid>

        {/* Deuxième partie (10% de la largeur) */}
        <Grid item xs={12} md={3}>
          {/* Contenu de la deuxième partie */}
          <HomeCommentSection/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
