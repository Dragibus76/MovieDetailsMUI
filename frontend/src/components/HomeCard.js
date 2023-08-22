import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

const StyledHomeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-width: 150px;
  box-shadow: none!important;
  
`;

const StyledCardMedia = styled(CardMedia)`
  border-radius: 8px;
  height: 200px;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const TitleTypography = styled(Typography)`
&& {
    text-align: left;
    overflow-wrap: break-word;
    white-space: normal;
  }
`;


const HomeCard = ({ title, image, style, date }) => {
  return (
    <StyledHomeCard style={{ flex: '0 0 auto', ...style }}>
      <StyledCardMedia component="img" alt={title} image={image} />
      <StyledCardContent>
        <TitleTypography variant="h8" component="div" textAlign="left">
          {title}
        </TitleTypography>
        <Typography gutterBottom variant="h8" component="div" textAlign="left">
          {date}
        </Typography>
        
      </StyledCardContent>
    </StyledHomeCard>
  );
};

export default HomeCard;
