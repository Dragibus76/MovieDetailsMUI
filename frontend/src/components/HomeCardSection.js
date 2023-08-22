import React from 'react';
import { Box } from '@mui/material';
import HomeCard from './HomeCard';
import styled from 'styled-components';

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


const fakeData = [
    {
      title: "Le Roi Singe",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1JbSFC91upHU5CuZS065A4qG0NR.jpg",
      date: "11 Aout 2023",
    },
    {
      title: "Blue Beetle",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xSVtl6ZF7fNuZIoXkZbzI2EzoAD.jpg",
      date: "16 Aout 2023",
    },
    {
        title: "Élémentaire",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rzY5kUJJ1zGfingV2oHyyxtlGNa.jpg",
        date: "14 Juin 2023",
      },
      {
        title: "Spider-Man : Across the Spider-Verse",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Jww51q6f7GYIvt8XgtHKrrREnX.jpg",
        date: "31 Mai 2023",
      },
      {
        title: "Mask Girl",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3O8uTUpt76ShtEtNNrOJpcwQROH.jpg",
        date: "18 Aout 2023",
      },
      {
        title: "Openheimer",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg",
        date: "19 Juin 2023",
      },
      {
        title: "Agent Stone",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPXyy4KpiLN2JfUZE5CJrccVVMl.jpg",
        date: "9 Aout 2023",
      },
      {
        title: "Ruby, l'ado Kraken",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eTQS72K0sDmbdpNiOCN0jerlRvC.jpg",
        date: "28 Juin 2023",
      },
      {
        title: "Barbie",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cKCQRjp8WyOTGAZJSOf5SLjRyis.jpg",
        date: "19 Juillet 2023",
      },
      {
        title: "The Winter King",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fYx5q9hPAmbDrWzsYUDhxZJnigC.jpg",
        date: "18 Aout 2023",
      },
  ];

  const HomeCardSection = () => {
    return (
      <ScrollableBox
      >
        {fakeData.map((data, index) => (
          <HomeCard
            key={index}
            title={data.title}
            image={data.image}
            description={data.description}
            style={{ flex: '0 0 auto' }} // Ajoutez cette ligne
          />
        ))}
      </ScrollableBox>
    );
  };

export default HomeCardSection;
