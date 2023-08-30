import styled from "styled-components";
import { Divider, Typography } from "@mui/material";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TypographyWeightTitle = styled(Typography)`
font-weight: bold!important;
padding-top: 1rem;
`;

export const TypographyNormalTitle = styled(Typography)`
font-weight: normal;
`;

export const MediaDetailsDivider = styled(Divider)`
  display: none;

  @media (max-width: 600px) {
    display: block;
    margin-top: 20px;
  }
`;

export const TypographyCategory = styled(Typography)`
font-weight: normal;
font-size: 15px!important;
color: #BDBDBD;
text-align: left;
`;