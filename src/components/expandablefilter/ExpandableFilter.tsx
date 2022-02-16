import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ExpandableFilterProps } from "../../models/components/ExpandableFilter";

import Checkbox from "../checkbox/Checkbox";

export default function ExpandableFilter({
  title,
  options,
  updateIds,
  type,
}: ExpandableFilterProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const updateCheckedIds = useCallback(
    (id: string) => {
      // * If type is checkbox, we can have multiple values selected
      if (type === "checkbox") {
        const set = new Set(checkedIds);

        set.has(id) ? set.delete(id) : set.add(id);

        const toArr = Array.from(set);

        updateIds(toArr);
        setCheckedIds(toArr);
      }

      // * If type is radio, we can have only one value selected
      if (type === "radio") {
        updateIds([id]);
        setCheckedIds([id]);
      }
    },
    [checkedIds]
  );

  return (
    <>
      <div>
        <button onClick={() => setShow(!show)}>{title}</button>
        {show &&
          options.map((option) => (
            <Checkbox
              checked={checkedIds.includes(`${option.id}`)}
              type={type}
              key={`${option.name}-${option.id}`}
              text={option.name}
              id={option.id}
              onChange={updateCheckedIds}
            />
          ))}
      </div>
    </>
  );
}
