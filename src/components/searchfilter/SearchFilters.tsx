import React, { useCallback, useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [dateValue, setDateValue] = useState<null | number>(null);

  const onSearchChange = useCallback(
    (val: string) => {
      searchMovies(val, dateValue);
      setSearchValue(val);
    },
    [searchMovies, dateValue]
  );

  const onDateChange = useCallback(
    (val: number) => {
      searchMovies(searchValue, val);
      setDateValue(val);
    },
    [searchMovies, searchValue]
  );

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar onChange={onSearchChange} />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movie</CategoryTitle>
        {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
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
