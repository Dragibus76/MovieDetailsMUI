import React, { useState, useEffect } from "react";
import { isSameDay } from "date-fns";
import Tooltip from "@mui/material/Tooltip";
import * as tmdbApi from "../utils/tmdbApi"; 
import { StyledCalendarWrapper, StyledCalendar, StyledTitleCalendar } from '../Styles/CalendarComponentStyled';

const CalendarComponent = () => {
  const [releaseDates, setReleaseDates] = useState([]);
  const [movieTitles, setMovieTitles] = useState({});
  const [seriesTitles, setSeriesTitles] = useState({});
  const [seriesReleaseDates, setSeriesReleaseDates] = useState([]);

  useEffect(() => {
    tmdbApi.fetchUpcomingMovieData()
      .then((movies) => {
        const releaseDates = movies.map((movie) => new Date(movie.release_date));
        setReleaseDates(releaseDates);
        const titles = {};
        movies.forEach((movie) => {
          titles[new Date(movie.release_date).getTime()] = movie.title;
        });
        setMovieTitles(titles);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  
    tmdbApi.fetchAiringTodayTvData()
      .then((series) => {
        const releaseDates = series.map((series) => new Date(series.first_air_date));
        setSeriesReleaseDates(releaseDates); // Here is the correction
        const titles = {};
        series.forEach((series) => {
          titles[new Date(series.first_air_date).getTime()] = series.name;
        });
        setSeriesTitles(titles);
      })
      .catch((error) => {
        console.error("Error fetching TV series data:", error);
      });
  }, []);
  

  const tileContent = ({ date }) => {
    const movieReleaseDate = releaseDates.find((releaseDate) =>
      isSameDay(releaseDate, date)
    );
    const seriesReleaseDate = seriesReleaseDates.find((releaseDate) =>
      isSameDay(releaseDate, date)
    );

    if (movieReleaseDate) {
      const movieTitle = movieTitles[movieReleaseDate.getTime()];
      return (
        <Tooltip title={movieTitle} placement="top">
          <span>⍟</span>
        </Tooltip>
      );
    } else if (seriesReleaseDate) {
      const seriesTitle = seriesTitles[seriesReleaseDate.getTime()];
      return (
        <Tooltip title={seriesTitle} placement="top">
          <span>⍟</span>
        </Tooltip>
      );
    }
  };

  return (
    <>
    <StyledTitleCalendar textAlign="left">Les prochaines sorties en dates</StyledTitleCalendar>
    <StyledCalendarWrapper>
      <StyledCalendar tileContent={tileContent} />
    </StyledCalendarWrapper>
    </>
  );
};

export default CalendarComponent;
