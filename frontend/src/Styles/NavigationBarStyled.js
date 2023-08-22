import styled from 'styled-components';
import { AppBar, Menu, MenuItem } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #262335!important;
`;

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    background-color: #262335; /* Changer la couleur de fond ici */
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  a {
    color: white; /* Couleur du texte */
    text-decoration: none; /* Supprimer la décoration des liens */
  }
`;