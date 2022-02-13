import React, { memo, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";
import { primaryColor } from "../../colors";
import { imagePath } from "../../fetcher";
import { MovieItemProps } from "../../models/components/MovieItem";

const MovieItem = ({ movie, genres }: MovieItemProps) => {
  const movieGenres = useMemo(
    () =>
      genres
        .filter((genre) =>
          movie.genre_ids.find((movieGenreId) => movieGenreId === genre.id)
        )
        .map((mappedGenre) => mappedGenre.name)
        .join(" | "),
    []
  );

  return (
    <MovieItemWrapper>
      <LeftCont image={`${imagePath}${movie.poster_path}`}></LeftCont>
      <RightCont>
        <HeaderWrapper key={movie.original_title + movie.id}>
          <MovieTitle>{movie.original_title}</MovieTitle>
          <PrimaryBox>{movie.vote_average}</PrimaryBox>
        </HeaderWrapper>

        <PrimaryP>{movieGenres}</PrimaryP>
        <p>{movie.overview}</p>
        <PrimaryP>{movie.release_date}</PrimaryP>
      </RightCont>
    </MovieItemWrapper>
  );
};

export default memo(MovieItem);

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  margin: 15px;
`;

const LeftCont = styled.div<{ image: string }>`
  width: 200px;
  height: 300px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 20px;
  ${({ image }) => css`
    background-image: url(${image});
  `};
`;

const RightCont = styled.div`
  width: 70%;
  display: inline-block;
  box-sizing: border-box;
  background: #f4f4f4;
  padding: 20px;
`;

const HeaderWrapper = styled.div`
  display: inline-block;
`;

const MovieTitle = styled.h3`
  float: left;
  display: inline;
  width: 92%;
`;

const PrimaryBox = styled.div`
  background-color: ${primaryColor};
  float: right;
  display: inline;
  width: 8%;
  padding: 1px;
`;

const PrimaryP = styled.p`
  color: ${primaryColor};
`;
