import React from "react";
import { MenuItem } from "@mui/material";
import { StyledFindSection, StyledSelect, StyledSearchBar } from '../Styles/SearchBarComponentStyled';

const SearchBarComponent = ({ selectedType, mediaGenres, searchQuery, searching, handleTypeSelect, handleSearchChange }) => {
  return (
    <StyledFindSection>
      <StyledSelect
        size="small"
        value={selectedType}
        onChange={handleTypeSelect}
        style={{ marginRight: 20 }}>
        <MenuItem value="Tout">Tout</MenuItem>
        {mediaGenres && mediaGenres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <StyledSearchBar
        size="small"
        label="Rechercher"
        value={searchQuery}
        onChange={handleSearchChange}
       style={{margin: "5px"}}/>
    </StyledFindSection>
  );
};

export default SearchBarComponent;
