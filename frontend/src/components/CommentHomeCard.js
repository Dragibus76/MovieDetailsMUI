import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const StyledCardHeader = styled(CardHeader)`
  background-color: #fff;
  margin-top: 1rem;
  width: auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: left;
`;

const StyledTypographyPseudo = styled(Typography)`
  color: #000;
  font-weight: 800;
  font-size: 1rem;
`;
const StyledTypographyResponse = styled(Typography)`
  color: #000;
  font-weight: 800;
  font-size: 1rem;
`;

const CommentHomeCard = ({ avatar, pseudo, subheader, extraText }) => {
  return (
    <StyledCardHeader
      avatar={
        avatar ? (
          <Avatar alt={`Avatar de ${pseudo}`} src={avatar} />
        ) : (
          <Skeleton variant="circular" width={40} height={40} />
        )
      }
      title={
        pseudo ? (
          <StyledTypographyPseudo variant="h8">{pseudo}</StyledTypographyPseudo>
        ) : (
          <Skeleton variant="text" width={60} height={18} />
        )
      }
      subheader={
        extraText ? (
          <StyledTypographyResponse variant="body2">
            {extraText}
          </StyledTypographyResponse>
        ) : (
          <Skeleton variant="text" width={"100%"} height={18} />
        )
      }
    />
  );
};

export default CommentHomeCard;
