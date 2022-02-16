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
  const [genresParam, setGenresParam] = useState('');
  const [rating, setRating] = useState('');
  const [language, setLanguage] = useState('')

  const updateGenreIds = useCallback((ids: string[]) => {
    setGenresParam(() => {
      return ids.join("%20s");
    });
  }, []);

  const updateRating = useCallback((ids: string[]) => {
    console.log("RATINGS: ", ids);
    setRating(ids[0])
  }, []);

  const updateLanguage = useCallback((ids: string[]) => {
    console.log("LANGUAGE: ", ids);
    setLanguage(ids[0])
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
          type="checkbox"
          key="Select genre(s)"
          title="Select genre(s)"
          options={genres}
          updateIds={updateGenreIds}
        />
        <ExpandableFilter
          type="radio"
          key="Select min. vote"
          title="Select min. vote"
          options={ratings}
          updateIds={updateRating}
        />
        <ExpandableFilter
          type="radio"
          key="Select language"
          title="Select language"
          options={languages}
          updateIds={updateLanguage}
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
  margin-bottom: 10px;
`;
