import styled from "styled-components";
import { InputProps } from "./InputProps";

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px ${(props) => (props.disabled ? "#e4e3ea" : "#353637")};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
  &:invalid {
    border: none;
    outline: 2px solid red;
    border-radius: 5px;
  }
`;

export default StyledInput;
