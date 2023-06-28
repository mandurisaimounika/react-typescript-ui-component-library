import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 168px;/
  padding: 10px;
  cursor: pointer;
  font-family: sans-serif;
`;

export const DropDownList = styled.select`
  margin-bottom: 12.8px;
  padding: 6.4px 32px 6.4px 16px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 12.8px;
  color: #3faffa;
  background: #ffffff;
`;

export const ListItem = styled.option`
  list-style: none;
  margin-bottom: 12.8px;
  cursor: pointer;
  &:hover {
    color: #fd9e46;
  }
  &:checked {
    box-shadow: 0 0 0 3px lime;
  }
`;
