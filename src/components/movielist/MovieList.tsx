import React from "react";
import styled from "styled-components";
import { MovieListProps } from "../../models/components/MovieList";

import MovieItem from "../movieitem/MovieItem";

export default function MovieList({ movies, genres }: MovieListProps) {
  return (
    <MoviesWrapper>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} genres={genres} />
      ))}
      {/* Finish the MovieItem component and use it here to display the movie results */}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  width: 70%;
  position: relative;
`;
