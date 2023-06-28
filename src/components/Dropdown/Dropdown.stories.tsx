import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "ReactUIComponentLibrary/Dropdown",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const MenuItems = (args) => <Dropdown {...args}></Dropdown>;

MenuItems.args = {
  options: ["1", "2", "3", "4"],
};

export const SelectedOption: Story = (args) => (
  <Dropdown data-testId="test" {...args} />
);
SelectedOption.args = {
  options: ["1", "2", "3", "4"],
  selectedOption: "4",
};
