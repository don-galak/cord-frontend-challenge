import axios, { AxiosInstance } from "axios";

// All of your API requests should be in this file
const apiKey = "1047dd228087fc6ef79efb15641ffd73";

const baseUrl = "https://api.themoviedb.org/3";

const fetcher: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imagePath = 'https://image.tmdb.org/t/p/w200'
const videosPath = (movieId: string) => `movie/${movieId}/videos`;
const reviewsPath = (movieId: string) => `movie/${movieId}/reviews`;
const similarPath = (movieId: string) => `movie/${movieId}/similar`;
const popularPath = `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&`;
const genrePath = `/genre/movie/list?api_key=${apiKey}&language=en-US`;

export const getPopular = async () => {
  try {
    const res = await fetcher.get(popularPath);
    return res.data;
  } catch (err) {
    throw new Error(`There was an error fetching the popular movies: ${err}`);
  }
};

export const getMovieGenres = async () => {
  try {
    const res = await fetcher.get(genrePath);
    return res.data;
  } catch (err) {
    throw new Error(`There was an error fetching the movie genres: ${err}`);
  }
};
