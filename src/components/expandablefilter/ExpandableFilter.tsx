import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ExpandableFilterProps } from "../../models/components/ExpandableFilter";

import Checkbox from "../checkbox/Checkbox";

export default function ExpandableFilter({
  title,
  options,
  updateIds
}: ExpandableFilterProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const updateCheckedIds = useCallback(
    (id: string) => {
      const set = new Set(checkedIds);
      if (set.has(id)) {
        set.delete(id);
      } else {
        set.add(id);
      }
      const toArr = Array.from(set);

      updateIds(toArr);
      setCheckedIds(toArr);
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
