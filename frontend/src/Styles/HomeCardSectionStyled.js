import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const ScrollableBox = styled(Box)`
  display: flex;
  overflow: scroll;
  max-width: 100%;
  padding: 1rem;
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

