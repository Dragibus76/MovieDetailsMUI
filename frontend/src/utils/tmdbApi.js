import { API_KEY, BASE_URL, LANG } from "./config";

export const fetchData = async (endpoint, category, params) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}/${category}?api_key=${API_KEY}&language=${LANG}${params}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

export const fetchMediaData = async (type, page) => {
  const params = type === "Tout" ? `&page=${page}` : `&with_genres=${type}&page=${page}`;

  return {
    mediaData: await fetchData("discover", "movie", params),
    totalPages: await fetchTotalPages("discover", "movie", params)
  };
};

export const fetchTotalPages = async (endpoint, category, params) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}/${category}?api_key=${API_KEY}&language=${LANG}${params}`
    );
    const data = await response.json();
    return data.total_pages;
  } catch (error) {
    throw new Error(`Error fetching total pages: ${error}`);
  }
};

export const fetchMovieGenres = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    throw new Error(`Error fetching movie genres: ${error}`);
  }
};

export const fetchSearchResults = async (query, page) => {
  const params = `&query=${query}&page=${page}`;

  return {
    mediaData: await fetchData("search", "movie", params),
    totalPages: await fetchTotalPages("search", "movie", params)
  };
};

export const fetchNowPlayingMovieData = () => fetchData("movie", "now_playing", "");
export const fetchPopularMovieData = () => fetchData("movie", "popular", "");
export const fetchTopRatedMovieData = () => fetchData("movie", "top_rated", "");
export const fetchUpcomingMovieData = () => fetchData("movie", "upcoming", "");
export const fetchAiringTodayTvData = () => fetchData("tv", "airing_today", "");
export const fetchOnTheAirTvData = () => fetchData("tv", "on_the_air", "");
export const fetchPopularTvData = () => fetchData("tv", "popular", "");
export const fetchTopRatedTvData = () => fetchData("tv", "top_rated", "");




