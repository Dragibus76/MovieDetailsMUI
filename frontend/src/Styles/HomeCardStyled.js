import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const StyledHomeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 150px;
  box-shadow: none !important;
  position: relative;
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 8px 8px 0 0;
  height: 200px;
  
`;

export const StyledCardContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleTypography = styled(Typography)`
  && {
    text-align: left;
    font-weight: 700;
    margin-top:-13px;
  }
`;

export const DateTypography = styled(Typography)`
  && {
    text-align: left;
    font-size: 0.8rem;
    color: #bdbdbd;
    font-weight: 700;
  }
`;

export const CircularProgressWrapper = styled.div`
  position: absolute;
  top: -60px;
  left: 0px;
`;

export const CircularProgressLabel = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 9px;
  color: #fff;
  font-weight: bold;
`;
