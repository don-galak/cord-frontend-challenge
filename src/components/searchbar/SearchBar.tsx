import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import debounce from "lodash/debounce";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { SearchBarProps } from "../../models/components/SearchBar";

const SearchBar = memo(({  onChange }: SearchBarProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 400),
    []
  );

  useEffect(() => debouncedChangeHandler.cancel(), []);

  return <Input onChange={debouncedChangeHandler} />;
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
