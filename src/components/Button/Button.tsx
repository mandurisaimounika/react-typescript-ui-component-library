import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import StyledButton from "./ButtonStyles";

const Button: FC<ButtonProps> = ({
  label,
  disabled,
  style,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
