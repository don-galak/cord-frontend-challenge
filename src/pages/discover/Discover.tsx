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

  
  // ! extract state into seperate hooks or constant vars 
  const searchMovies = useCallback(
    async (keyword: string, year: number | null) => {
      setLoading(true);
      const res = await fetcher.getMoviesBySearch(keyword, year);
      setLoading(false);
      setState((p) => ({
        ...p,
        results: res.results,
        totalCount: res.total_results,
      }));
    },
    []
  );

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

const MovieResults = styled.div`
  // float: left;
`;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
