import React from "react";
import { Avatar, Skeleton } from "@mui/material";
import { StyledCardHeader, StyledTypographyPseudo, StyledTypographyResponse } from '../Styles/HomeCardCommentStyled';

const HomeCardComment = ({ avatar, pseudo, extraText }) => {
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

export default HomeCardComment;
