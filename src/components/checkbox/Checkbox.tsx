import React, { memo } from "react";
import styled from "styled-components";
import { CheckboxProps } from "../../models/components/Checkbox";

function CheckBox({ id, text, onChange, type, checked }: CheckboxProps): JSX.Element {
  return (
    <CheckboxCont>
      <input
        checked={checked}
        type={type}
        id={text as string}
        name={text as string}
        value={text}
        onChange={() => {
          onChange(`${id}`);
        }}
      />
      <label>{text}</label>
    </CheckboxCont>
  );
}

export default memo(CheckBox);

const CheckboxCont = styled.div`
  position: relative;
`;
