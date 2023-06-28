import React, { FC, Fragment } from "react";
import { InputProps } from "./InputProps";
import StyledInput from "./InputStyles";

const Input: FC<InputProps> = ({
  id,
  disabled,
  type,
  value,
  isValid,
  onChange,
  placeholder,
  ...props
}) => {
  const validate = () => {
    switch (type) {
      case "email": {
        return ".+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$";
      }
      case "text": {
        return "[a-zA-Z]*$";
      }
    }
  };

  return (
    <Fragment>
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        pattern={isValid ? validate() : undefined}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
    </Fragment>
  );
};

export default Input;
