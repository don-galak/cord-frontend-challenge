import axios, { AxiosInstance } from "axios";
import { QueryMap, SearchQueryFn, SearchTerm } from "./models/fetcher";

const apiKey = "1047dd228087fc6ef79efb15641ffd73";
const baseUrl = "https://api.themoviedb.org/3";

const fetcher: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imagePath = "https://image.tmdb.org/t/p/w200";
const popularPath = `/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
const genrePath = `/genre/movie/list?api_key=${apiKey}&language=en-US`;
const searchPath = `search/movie?api_key=${apiKey}`;

const queryMap: QueryMap = {
  popular: {
    endpoint: popularPath,
    error: "There was an error fetching the popular movies: ",
  },
  genres: {
    endpoint: genrePath,
    error: "There was an error fetching the movie genres: ",
  },
  search: {
    generateEndpoint: (query, year, genres) => {
      if (!query || genres)
        return `${popularPath}&page=1&year=${year}&with_genres=${genres}%20&`;
      if (!year) return `${searchPath}&query=${query}`;
      return `${searchPath}&query=${query}&page=1&year=${year}`;
    },
    error: "There was an error fetching movies by query: ",
  },
};

export const get = async (
  term: SearchTerm,
  query: string | null = null,
  year: string | null = null,
  genres: string = ""
) => {
  const params = queryMap[term];
  let endpoint = params.endpoint;

  if (term === "search") {
    endpoint = (queryMap.search.generateEndpoint as SearchQueryFn)(
      query,
      year,
      genres
    );
  }

  try {
    const res = await fetcher.get(endpoint as string);
    return res.data;
  } catch (err) {
    throw new Error(params.error + err);
  }
};
