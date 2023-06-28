import styled from "styled-components";
import { ButtonProps } from "./ButtonProps";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  padding: ${(props) =>
    props.style?.size === "small"
      ? "7px 25px 8px"
      : props.style?.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.style?.primary ? "#1b116e" : "#ffffff")};
  background-color: ${(props) =>
    props.style?.primary && props.style.primaryColor
      ? props.style.primaryColor
      : props.style?.secondaryColor
      ? props.style.secondaryColor
      : "#90ee90"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) =>
      props.style?.primary && props.style.primaryColor
        ? props.style.hoverPrimaryColor
        : props.style?.hoverSecondaryColor
        ? props.style.hoverSecondaryColor
        : "#00FF00"};
  }
  &:active {
    border: 2px solid #1b116e;
    padding: ${(props) =>
      props.style?.size === "small"
        ? "5px 23px 6px"
        : props.style?.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

export default StyledButton;
