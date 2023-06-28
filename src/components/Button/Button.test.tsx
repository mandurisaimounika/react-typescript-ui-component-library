import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Running Test for Marbella Button", () => {
  test("Check Button Text", () => {
    render(<Button label="Open" onClick={() => {}} disabled />);
    expect(screen.getByRole("button")).toHaveTextContent("Open");
  });

  test("Check Button Disabled", () => {
    render(<Button label="Button" onClick={() => {}} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
