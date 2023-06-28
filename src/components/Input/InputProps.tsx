import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  type?: "text" | "number" | "email";
  value?: string;
  isValid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
