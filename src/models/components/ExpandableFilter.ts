import { CheckboxType } from "../common/checkbox";
import { Option } from "../common/option";

export interface ExpandableFilterProps {
  title: string;
  options: Option[];
  updateIds: (ids: string[]) => void;
  type: CheckboxType;
}
