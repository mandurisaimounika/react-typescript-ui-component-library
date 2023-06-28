import { ReactEventHandler } from "react";

export interface DropdownProps {
  options?: string[];
  selectedOption?: string;
  onSelect?: ReactEventHandler<HTMLSelectElement>;
}
