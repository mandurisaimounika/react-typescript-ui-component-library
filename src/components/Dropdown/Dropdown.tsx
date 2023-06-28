import React, { FC, Fragment } from "react";
import { DropdownProps } from "./DropdownProps";
import { DropDownContainer, DropDownList, ListItem } from "./DropdownStyles";

const Dropdown: FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <Fragment>
      <DropDownContainer>
        <DropDownList onChange={onSelect} value={selectedOption}>
          <ListItem value="select">Select Item</ListItem>
          {options?.map((option) => (
            <ListItem value={option}>{option}</ListItem>
          ))}
          ;
        </DropDownList>
      </DropDownContainer>
    </Fragment>
  );
};

export default Dropdown;
