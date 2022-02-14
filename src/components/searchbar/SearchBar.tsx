import React, { memo, useEffect, useMemo } from "react";
import styled, { css } from "styled-components";
import debounce from "lodash/debounce";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { SearchBarProps } from "../../models/components/SearchBar";

const SearchBar = memo(({ onSearchChange, onDateChange }: SearchBarProps) => {
  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const debouncedSearchChangeHandler = useMemo(
    () => debounce(searchChangeHandler, 400),
    []
  );

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(e.target.value);
  };

  const debouncedDateChangeHandler = useMemo(
    () => debounce(dateChangeHandler, 400),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearchChangeHandler.cancel();
      debouncedDateChangeHandler.cancel();
    };
  }, []);

  return (
    <div className="input-icons">
      {/* <img src={SearchIcon} className="icon" alt="search" /> */}
      <Input onChange={debouncedSearchChangeHandler} />
      {/* <img src={CalendarIcon} className="icon" alt="search" /> */}
      <Input
        onChange={debouncedDateChangeHandler}
        type="number"
        min={1878}
        max={2022}
      />
    </div>
  );
});

export default SearchBar;

const Input = styled.input`
  right: 35px;
  top: 40%;
  width: 90%;
  height: 30px;
  padding: 10px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${colors.primaryColor};
`;
