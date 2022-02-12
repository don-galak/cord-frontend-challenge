import React from "react";
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
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
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

const CategoryTitle = styled.div``;
