import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PosterComponent from "./PosterComponent";
import { fetchPosters } from "../utils/tmdbApi";

const PosterBackdropTabs = ({ mediaId, mediaType }) => {
  const [tabValue, setTabValue] = useState(0);
  const [posters, setPosters] = useState([]);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    fetchPosters(mediaId, mediaType)
      .then((data) => {
        setPosters(data);
      })
      .catch((error) => {
        console.error("Error fetching posters:", error);
      });
  }, [mediaId, mediaType]);

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
        <Tab label="Posters" />
        <Tab label="Backdrops" />
      </Tabs>
      {tabValue === 0 && (
        <Box p={3}>
          <PosterComponent posters={posters} />
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
