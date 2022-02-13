import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter/SearchFilters";
import MovieList from "../../components/movielist/MovieList";
import { DiscoverState } from "../../models/pages/Discover";

export default function Discover() {
  const [state, setState] = useState(new DiscoverState());
  const [loading, setLoading] = useState(true);

  // * Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    void (async () => {
      const res = await fetcher.getPopular();
      const genreOptions = await fetcher.getMovieGenres();
      setState((p) => ({
        ...p,
        results: res.results,
        totalCount: res.total_results,
        genreOptions: genreOptions.genres,
      }));
      setLoading(false);
    })();
  }, []);

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = useCallback((keyword: string, year: number) => {}, []);

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters>
        <SearchFilters
          genres={state.genreOptions}
          ratings={state.ratingOptions}
          languages={state.languageOptions}
          searchMovies={searchMovies}
        />
      </MovieFilters>
      <MovieResults>
        {state.totalCount > 0 && (
          <TotalCounter>{state.totalCount} results</TotalCounter>
        )}
        {loading && <div className="loader"></div>}
        {!loading && (
          <MovieList
            movies={state.results || []}
            genres={state.genreOptions || []}
          />
        )}
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
