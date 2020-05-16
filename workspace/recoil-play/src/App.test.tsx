import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App";

describe("App", () => {
  const defaultLabel = "click me!";
  const clickedLabel = "clicked!";
  test("default label is 'click me!'", () => {
    const { getByText } = render(<App />);
    expect(getByText(defaultLabel)).not.toBeNull();
  });

  test("if button click, change label to 'clicked!'", () => {
    const { getByText } = render(<App />);
    const target = getByText(defaultLabel);
    fireEvent.click(target);
    expect(target).toHaveTextContent(clickedLabel);
  });
});
