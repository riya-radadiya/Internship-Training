import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./Greeting";

test("renders greeting text", () => {
  render(<Greeting />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});