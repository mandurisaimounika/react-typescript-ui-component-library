import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "ReactUIComponentLibrary/Button",
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => <Button data-testId="test" {...args} />;
Primary.args = {
  disabled: false,
  label: "Primary",
  style: {
    primary: true,
    primaryColor: "lightgreen",
    hoverPrimaryColor: "green",
  },
};

export const Secondary: Story = (args) => (
  <Button data-testId="test" {...args} />
);
Secondary.args = {
  disabled: false,
  label: "Secondary",
  style: {
    primary: false,
    secondaryColor: "lightblue",
    hoverSecondaryColor: "blue",
  },
};

export const Disabled: Story = (args) => (
  <Button data-testId="test" {...args} />
);
Disabled.args = {
  disabled: true,
  label: "Disabled",
  style: {
    primary: false,
  },
};

export const Small: Story = (args) => <Button data-testId="test" {...args} />;
Small.args = {
  disabled: false,
  label: "Small",
  style: {
    primary: true,
    size: "small",
    primaryColor: "lightgreen",
    hoverPrimaryColor: "green",
  },
};

export const Medium: Story = (args) => <Button data-testId="test" {...args} />;
Medium.args = {
  disabled: false,
  label: "Medium",
  style: {
    primary: true,
    size: "medium",
    primaryColor: "lightgreen",
    hoverPrimaryColor: "green",
  },
};

export const Large: Story = (args) => <Button data-testId="test" {...args} />;
Large.args = {
  disabled: false,
  label: "Large",
  style: {
    primary: true,
    size: "large",
  },
};
