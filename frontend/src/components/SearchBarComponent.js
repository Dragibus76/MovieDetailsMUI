import React from "react";
import { Select, MenuItem, TextField, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

const SearchBarComponent = ({ selectedType, movieGenres, searchQuery, searching, handleTypeSelect, handleSearchChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Select
        size="small"
        value={selectedType}
        onChange={handleTypeSelect}
        style={{ marginRight: 20 }}
      >
        <MenuItem value="Tout">Tout</MenuItem>
        {movieGenres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        size="small"
        label="Rechercher"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {searching && (
        <div style={{ alignItems: "center", marginTop: 10 }}>
          <CachedIcon fontSize="small" style={{ marginRight: 5 }} />
          <Typography variant="body2">Recherche en cours...</Typography>
        </div>
      )}
    </div>
  );
};

export default SearchBarComponent;
