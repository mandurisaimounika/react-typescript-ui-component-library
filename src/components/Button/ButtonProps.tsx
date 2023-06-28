import { MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  style?: {
    size?: "small" | "medium" | "large";
    primary?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    hoverPrimaryColor?: string;
    hoverSecondaryColor?: string;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
