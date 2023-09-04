import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PosterComponent from "./PosterComponent";
import { fetchPosters } from "../utils/tmdbApi";

const PosterBackdropTabs = ({ mediaId, mediaType }) => {
  const [tabValue, setTabValue] = useState(0);
  const [posters, setPosters] = useState([]);
  const [languageTabValue, setLanguageTabValue] = useState("All");
  const [availableLanguages, setAvailableLanguages] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLanguageTabChange = (event, newValue) => {
    setLanguageTabValue(newValue);
  };

  useEffect(() => {
    fetchPosters(mediaId, mediaType)
      .then((data) => {
        setPosters(data);
        // Obtenez la liste des langues uniques à partir des posters
        const languages = [...new Set(data.map((poster) => poster.iso_639_1))];
        setAvailableLanguages(languages);
      })
      .catch((error) => {
        console.error("Error fetching posters:", error);
      });
  }, [mediaId, mediaType]);

  // Générez dynamiquement les onglets en fonction des langues disponibles
  const languageTabs = availableLanguages.map((language) => (
    <Tab label={language} value={language} key={language} />
  ));

  const filteredPosters =
    languageTabValue === "All"
      ? posters
      : posters.filter((poster) => poster.iso_639_1 === languageTabValue);

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
        <Tab label="Posters" />
        <Tab label="Backdrops" />
      </Tabs>
      <Tabs
        value={languageTabValue}
        onChange={handleLanguageTabChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Tous" value="All" />
        {languageTabs}
      </Tabs>
      {tabValue === 0 && (
        <Box p={3}>
          <PosterComponent posters={filteredPosters} /> {/* Utilisez filteredPosters ici */}
        </Box>
      )}
      {tabValue === 1 && (
        <Box p={3}>
          <p>Contenu de l'onglet "Backdrops" ici...</p>
        </Box>
      )}
    </Box>
  );
};

export default PosterBackdropTabs;
