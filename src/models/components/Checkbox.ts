import { CheckboxType } from "../common/checkbox";

export interface CheckboxProps {
  text: string | number;
  onChange: (id: string) => void;
  id: string | number;
  type: CheckboxType;
  checked: boolean;
}
