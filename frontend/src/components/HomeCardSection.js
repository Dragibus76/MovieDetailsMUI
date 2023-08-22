import React from 'react';
import { Box } from '@mui/material';
import HomeCard from './HomeCard';
import styled from 'styled-components';
import HomeFakeData from "../mocks/HomeFakeData";

const ScrollableBox = styled(Box)`
  display: flex;
  overflow: scroll;
  max-width: 100%;
  padding: 2rem;
  gap: 1rem;

  /* Styles for hiding vertical scrollbar */
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



  const HomeCardSection = () => {
    return (
      <ScrollableBox
      >
        {HomeFakeData.map((data, index) => (
          <HomeCard
            key={index}
            title={data.title}
            image={data.image}
            date={data.date}
            note={data.note}
            style={{ flex: '0 0 auto' }} 
          />
        ))}
      </ScrollableBox>
    );
  };

export default HomeCardSection;
