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

  const searchMovies = useCallback(
    async (keyword: string | null, year: string | null) => {
      if (keyword || year) {
        setLoading(true);
        const res = await fetcher.get("search", keyword, year);
        setLoading(false);
        setState((p) => ({
          ...p,
          results: res.results,
          totalCount: res.total_results,
        }));
      }
    },
    []
  );

  useEffect(() => {
    void (async () => {
      const res = await fetcher.get("popular");
      const genreOptions = await fetcher.get("genres");
      setState((p) => ({
        ...p,
        results: res.results,
        totalCount: res.total_results,
        genreOptions: genreOptions.genres,
      }));
      setLoading(false);
    })();
  }, []);

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
