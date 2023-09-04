import styled from "styled-components";
import { Divider, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TheatersIcon from '@mui/icons-material/Theaters';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypographyWeightTitle = styled(Typography)`
font-weight: bold!important;
padding-top: 1rem;
`;

export const TypographyNormalTitle = styled(Typography)`
font-weight: normal;
`;

export const TypographyTagline = styled(Typography)`
font-weight: normal;
text-align:left;
font-size:13px!important;
color:#BDBDBD;
`;
export const MediaDetailsDivider = styled(Divider)`
  display: none;

  @media (max-width: 600px) {
    display: block;
    margin-top: 20px;
  }
`;

export const TypographyCategory = styled(Typography)`
font-weight: 700!important;
font-size: 15px!important;
color: #BDBDBD;
text-align: left;
`;

export const TypographyRuntime = styled(Typography)`

font-size: 15px!important;
color: #000;
text-align: left;
`;

export const IconContainer = styled.div`
display:flex;
font-size: 15px!important;
color: #000;
text-align: left;
`;

export const FavoriteListIconContainer = styled.div`
display:flex;
justify-content: space-between;
`;

export const ListIconFavorite = styled(FavoriteIcon)`
Color: red;
`;

export const ListIconWatchList = styled(TheatersIcon)`
Color: orange;
`;

