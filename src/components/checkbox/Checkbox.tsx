import React, { memo, useCallback } from "react";
import styled from "styled-components";

function CheckBox({
  id,
  text,
  onChange,
}: {
  text: string | number;
  onChange: (id: string) => void;
  id: string | number;
}): JSX.Element {
  return (
    <CheckboxCont>
      <input
        type="checkbox"
        id={text as string}
        name={text as string}
        value={text}
        onChange={() => {
          onChange(`${id}`)
        }}
      />
      <label >{text}</label>
    </CheckboxCont>
  );
}

export default memo(CheckBox);

const CheckboxCont = styled.div`
  position: relative;
`;
