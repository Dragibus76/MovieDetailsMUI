import React from 'react';
import { StyledHomeCard, StyledCardMedia, StyledCardContent, TitleTypography, DateTypography, CircularProgressWrapper, CircularProgressLabel } from '../Styles/HomeCardStyled';
import { CircularProgress, Skeleton } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment'; 

const SkeletonHomeCard = () => {
  return (
    <StyledHomeCard style={{ flex: '0 0 auto' }}>
      <StyledCardMedia component="img" alt="" />
      <StyledCardContent>
        <CircularProgressWrapper>
          <CircularProgress
            variant="determinate"
            value={0}
            style={{ color: 'transparent', background: '#262435', borderRadius: '50%' }}
            size={40}
          />
          <CircularProgressLabel>{`0%`}</CircularProgressLabel>
        </CircularProgressWrapper>
        <Skeleton animation="wave" width={100} height={20} style={{ marginBottom: 8 }} />
        <Skeleton animation="wave" width={80} height={16} />
      </StyledCardContent>
    </StyledHomeCard>
  );
};

const HomeCard = ({ title, image, style, date, note, loading, commentCount }) => {
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
            style={{ color: progressColor, background: '#262435', borderRadius:'50%' }}
            size={35}
          />
          <CircularProgressLabel>{`${percentage}%`}</CircularProgressLabel>
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
