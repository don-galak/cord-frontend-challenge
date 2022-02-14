import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import { SearchFiltersProps } from "../../models/components/SearchFilters";
import ExpandableFilter from "../expandablefilter/ExpandableFilter";
import SearchBar from "../searchbar/SearchBar";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}: SearchFiltersProps): JSX.Element {
  const [keyword, setKeyword] = useState<null | string>(null);
  const [date, setDate] = useState<null | string>(null);
  const [genresParam, setGenresParam] = useState("");

  const updateGenreIds = useCallback((ids: string[]) => {
    setGenresParam(() => {
      return ids.join("%20s");
    });
  }, []);

  useEffect(() => {
    searchMovies(keyword, date, genresParam);
  }, [keyword, date, genresParam]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar onSearchChange={setKeyword} onDateChange={setDate} />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movie</CategoryTitle>
        <ExpandableFilter
          key="Select genre(s)"
          title="Select genre(s)"
          options={genres}
          updateIds={updateGenreIds}
        />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled("div")<{ marginBottom?: boolean }>`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  font-weight: bold;
`;
