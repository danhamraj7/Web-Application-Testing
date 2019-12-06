import React from "react";
import { render } from "@testing-library/react";
import App, { addByOne } from "./App";

test("addByOne add 1 to current value", () => {
  expect(addByOne(9)).toBe(10);
});

test("renders without crashing", () => {
  render(<App />);
});

test("it displays a button with the text strike", () => {
  const container = render(<App />);
  container.getAllByText("strike");
});
