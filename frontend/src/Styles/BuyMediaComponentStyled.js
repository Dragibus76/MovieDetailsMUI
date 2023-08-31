import styled from "styled-components";
import { Paper } from "@mui/material";

export const StyledProvider = styled(Paper)`
  padding: 10px;
  text-align: center;
`;

export const ScrollableDiv = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;