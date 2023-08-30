import { Box, CardMedia, Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const ScrollablePersonBox = styled(Box)`
  display: flex;
  overflow: scroll;
  max-width: 100%;
  padding-top: 1rem;
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const StyledPersonCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 150px;
  box-shadow: none !important;
  position: relative;
`;

export const StyledPersonCardMedia = styled(CardMedia)`
  border-radius: 8px 8px 8px 8px;
  height: 200px;
  background-size: cover;
`;

export const StyledPersonName = styled(Typography)`
  font-weight:bold!important;
`;

export const StyledCharacterName = styled(Typography)`
  color: #BDBDBD;
`;
