import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";


const SearchBarComponent = ({ selectedType, mediaGenres, searchQuery, searching, handleTypeSelect, handleSearchChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Select
        size="small"
        value={selectedType}
        onChange={handleTypeSelect}
        style={{ marginRight: 20 }}
      >
        <MenuItem value="Tout">Tout</MenuItem>
        {mediaGenres && mediaGenres.map((genre) => (
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
    </div>
  );
};

export default SearchBarComponent;
