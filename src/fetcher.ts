import axios, { AxiosInstance } from "axios";

const apiKey = "1047dd228087fc6ef79efb15641ffd73";
const baseUrl = "https://api.themoviedb.org/3";

const fetcher: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imagePath = "https://image.tmdb.org/t/p/w200";
const popularPath = `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&`;
const genrePath = `/genre/movie/list?api_key=${apiKey}&language=en-US`;
const searchPath = `search/movie?api_key=${apiKey}`;

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

export const getMoviesBySearch = async (query: string, year: number | null) => {
  try {
    const res = await fetcher.get(
      `${searchPath}&query=${query}&page=1&year=${year}`
    );
    return res.data;
  } catch (err) {
    throw new Error(`There was an error fetching movies by query: ${err}`);
  }
};
