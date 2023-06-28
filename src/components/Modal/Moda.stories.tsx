import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "ReactUIComponentLibrary/Modal",
  argTypes: { onClose: { action: "closed" } },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ShowModal: Story = (args) => (
  <Modal data-testId="test" {...args} />
);
ShowModal.args = {
  isOpen: true,
};
