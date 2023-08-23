import React from 'react';
import { StyledHomeCard, StyledCardMedia, StyledCardContent, TitleTypography, DateTypography, CircularProgressWrapper, CircularProgressLabel } from '../Styles/HomeCardStyled';
import { CircularProgress } from '@mui/material';

const HomeCard = ({ title, image, style, date, note }) => {
  const limitedNote = Math.min(Math.max(note, 0), 10);
  const percentage = (limitedNote / 10) * 100;
  const formattedPercentage = percentage.toFixed(1);

  let progressColor;
  if (percentage >= 70) {
    progressColor = '#21D07A';
  } else if (percentage >= 40) {
    progressColor = '#D2D530';
  } else {
    progressColor = '#DB2360';
  }

  return (
    <StyledHomeCard style={{ flex: '0 0 auto', ...style }}>
      <StyledCardMedia component="img" alt={title} image={image} />
      <StyledCardContent>
        <CircularProgressWrapper>
          <CircularProgress
            variant="determinate"
            value={percentage}
            style={{ color: progressColor, background: '#262435', borderRadius: '50%' }}
            size={40}
          />
          <CircularProgressLabel>{`${formattedPercentage}%`}</CircularProgressLabel>
        </CircularProgressWrapper>
        <TitleTypography variant="h8" component="div" textAlign="left">
          {title}
        </TitleTypography>
        <DateTypography variant="body2" component="div" textAlign="left">
          {date}
        </DateTypography>
      </StyledCardContent>
    </StyledHomeCard>
  );
};

export default HomeCard;
