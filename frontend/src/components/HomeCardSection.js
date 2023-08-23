import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { ScrollableBox } from "../Styles/HomeCardSectionStyled";
import { fetchNowPlayingMovieData, fetchPopularMovieData, fetchTopRatedMovieData, fetchUpcomingMovieData, fetchAiringTodayTvData, fetchOnTheAirTvData, fetchPopularTvData, fetchTopRatedTvData } from '../utils/tmdbApi';
import { formatDate } from '../utils/Utils';

const HomeCardSection = ({ category }) => {
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData = [];

        if (category === "en_ce_moment") {
          fetchedData = await fetchNowPlayingMovieData();
        } else if (category === "populaire") {
          fetchedData = await fetchPopularMovieData();
        } else if (category === "mieux_notes") { 
          fetchedData = await fetchTopRatedMovieData(); 
        } else if (category === "prochaine_sorties") { 
          fetchedData = await fetchUpcomingMovieData(); 
        } else if (category === "diffuse_aujourdhui") { 
          fetchedData = await fetchAiringTodayTvData(); 
        } else if (category === "en_ce_moment_plateforme") { 
          fetchedData = await fetchOnTheAirTvData();
        } else if (category === "populaires_series") { 
          fetchedData = await fetchPopularTvData();
        } else if (category === "mieux_notes_series") { 
          fetchedData = await fetchTopRatedTvData();
        }
        setDataToDisplay(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, [category]);


  return (
    <>
      <ScrollableBox>
        {dataToDisplay.map((data, index) => (
          <HomeCard
            key={index}
            title={data.title || data.name}
            image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
            date={formatDate(data.release_date || data.first_air_date)}
            note={data.vote_average}
            style={{ flex: "0 0 auto" }}
          />
        ))}
      </ScrollableBox>
    </>
);
      }
export default HomeCardSection;
