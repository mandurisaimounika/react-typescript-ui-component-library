import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "ReactUIComponentLibrary/InputField",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const TextType: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
TextType.args = {
  isValid: false,
  disabled: false,
  type: "text",
};

export const TextValid: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
TextValid.args = {
  isValid: true,
  disabled: false,
  type: "text",
};

export const NumberType: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
NumberType.args = {
  isValid: false,
  disabled: false,
  type: "number",
};

export const NumberValid: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
NumberValid.args = {
  isValid: true,
  disabled: false,
  type: "number",
};

export const EmailType: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
EmailType.args = {
  isValid: false,
  disabled: false,
  type: "email",
};

export const EmailValid: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
EmailValid.args = {
  isValid: true,
  disabled: false,
  type: "email",
};

export const Disabled: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
Disabled.args = {
  isValid: false,
  disabled: true,
};
