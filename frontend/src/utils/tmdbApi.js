import { API_KEY, BASE_URL, LANG } from "./config";

// FETCHER LES MEDIAS PAR CATEGORIES
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

// FETCHER LES MEDIAS PAR GENRE
export const fetchMediaData = async (mediaType, type, page) => {
  const endpoint = mediaType === "films" ? "movie" : "tv";
  const params = type === "Tout" ? `&page=${page}` : `&with_genres=${type}&page=${page}`;

  return {
    mediaData: await fetchData("discover", endpoint, params),
    totalPages: await fetchTotalPages("discover", endpoint, params)
  };
};
// FETCHER LES ACTEURS ET REALISATEURS DES MEDIAS
export const fetchMediaCast = async (mediaId, mediaType) => {
  const endpoint = mediaType === "movie" ? "movie" : "tv"; // Utilisation conditionnelle pour déterminer l'endpoint
  const response = await fetch(
    `${BASE_URL}/${endpoint}/${mediaId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};
// FETCHER LE NOMBRE TOTAL DE PAGES
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

// FETCHER LA LISTE TOTALE DES GENRES POUR LES MEDIAS
export const fetchMediaGenres = async (mediaType) => {
  try {
    const endpoint = mediaType === "films" ? "movie" : "tv";
    const response = await fetch(
      `${BASE_URL}/genre/${endpoint}/list?api_key=${API_KEY}&language=${LANG}`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    throw new Error(`Error fetching media genres: ${error}`);
  }
};

// FETCHER UN RESULTAT POUR LES MEDIAS
export const fetchSearchResults = async (query, page, mediaType) => {
  const endpoint = mediaType === "films" ? "movie" : "tv";
  const params = `&query=${query}&page=${page}`;

  return {
    mediaData: await fetchData("search", endpoint, params),
    totalPages: await fetchTotalPages("search", endpoint, params)
  };
};

// FETCHER LES DETAILS D'UN MEDIA
export const fetchMediaDetails = async (mediaId, mediaType) => {
  try {
    const endpoint = mediaType === "films" ? "movie" : "tv"; // Choix de l'endpoint en fonction du type de média
    const url = `${BASE_URL}/${endpoint}/${mediaId}?api_key=${API_KEY}&language=${LANG}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching media details:', error);
    throw error;
  }
};

// FETCHER LES ISO DES REGIONS
export const fetchRegions = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/watch/providers/regions?&language=${LANG}&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  }
};

export const fetchNowPlayingMovieData = () => fetchData("movie", "now_playing", "");
export const fetchPopularMovieData = () => fetchData("movie", "popular", "");
export const fetchTopRatedMovieData = () => fetchData("movie", "top_rated", "");
export const fetchUpcomingMovieData = () => fetchData("movie", "upcoming", "");
export const fetchAiringTodayTvData = () => fetchData("tv", "airing_today", "");
export const fetchOnTheAirTvData = () => fetchData("tv", "on_the_air", "");
export const fetchPopularTvData = () => fetchData("tv", "popular", "");
export const fetchTopRatedTvData = () => fetchData("tv", "top_rated", "");




