import { API_KEY, BASE_URL, LANG } from "./config";

// BASE POUR FETCHER LES FILMS
const fetchMovieData = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=${LANG}`
    );
    const data = await response.json();
    return data.results; // Assurez-vous d'adapter la structure de données à vos besoins
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des données pour la catégorie ${category}`
    );
  }
};

// BASE POUR FETCHER LES SERIES
const fetchTvData = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/${category}?api_key=${API_KEY}&language=${LANG}`
    );
    const data = await response.json();
    return data.results; // Assurez-vous d'adapter la structure de données à vos besoins
  } catch (error) {
    throw new Error(
      `Erreur lors de la récupération des données pour la catégorie ${category}`
    );
  }
};

// FETCHER LES FILMS DU MOMENT
export const fetchNowPlayingMovieData = async () => {
  return fetchMovieData("now_playing");
};

// FETCHER LES FILMS POPULAIRES
export const fetchPopularMovieData = async () => {
  return fetchMovieData("popular");
};

// FETCHER LES FILMS LES MIEUX NOTES
export const fetchTopRatedMovieData = async () => {
  return fetchMovieData("top_rated");
};

// FETCHER LES FILMS A VENIR
export const fetchUpcomingMovieData = async () => {
  return fetchMovieData("upcoming");
};

// FETCHER LES SERIES DIFUSEE AUJOURD'HUI
export const fetchAiringTodayTvData = async () => {
  return fetchTvData("airing_today");
};

// FETCHER LES SERIES DIFFUSEE SUR LES PALTEFORMES AUJOURD'HUI
export const fetchOnTheAirTvData = async () => {
  return fetchTvData("on_the_air");
};

// FETCHER LES SERIES LES PLUS POPULAIRES
export const fetchPopularTvData = async () => {
  return fetchTvData("popular");
};

// FETCHER LES SERIES LES MIEUX NOTEES
export const fetchTopRatedTvData = async () => {
  return fetchTvData("top_rated");
};
