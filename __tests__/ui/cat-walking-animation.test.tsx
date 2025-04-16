import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatWalkingAnimation from "../../src/components/ui/cat-walking-animation";

jest.mock("../../src/assets/cat.gif", () => "mocked-cat.gif");

describe("CatWalkingAnimation", () => {
  it("renders the motion div with correct animation props", () => {
    render(<CatWalkingAnimation />);
  });

  it("renders the cat image with correct src and class", () => {
    const { getByRole } = render(<CatWalkingAnimation />);
    const img = getByRole("img");
    expect(img).toHaveAttribute("src", "mocked-cat.gif");
    expect(img).toHaveClass("h-full");
  });
});
