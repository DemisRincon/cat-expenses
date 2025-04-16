import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatFactDisplay, {
  CatFactDisplayProps,
} from "../../src/components/ui/cat-fact-display";

describe("CatFactDisplay", () => {
  const defaultProps: CatFactDisplayProps = {
    fact: "Cats sleep 70% of their lives.",
    isLoading: false,
  };

  it("renders the loading state when isLoading is true", () => {
    render(<CatFactDisplay fact="" isLoading={true} />);
    expect(screen.getByText("Loading cat fact...")).toBeInTheDocument();
  });

  it("renders the cat fact when isLoading is false", () => {
    render(<CatFactDisplay {...defaultProps} />);
    expect(screen.getByText("Random cat fact:")).toBeInTheDocument();
    expect(
      screen.getByText("Cats sleep 70% of their lives.")
    ).toBeInTheDocument();
  });

  it("applies the correct styles to the container", () => {
    render(<CatFactDisplay {...defaultProps} />);
    const container = screen.getByText("Random cat fact:").parentElement;
    expect(container).toHaveClass("text-indigo-500 italic");
  });

  it("applies the correct styles to the loading text", () => {
    render(<CatFactDisplay fact="" isLoading={true} />);
    const loadingText = screen.getByText("Loading cat fact...");
    expect(loadingText).toHaveClass("mt-2 text-gray-500");
  });

  it("applies the correct styles to the fact text", () => {
    render(<CatFactDisplay {...defaultProps} />);
    const factText = screen.getByText("Cats sleep 70% of their lives.");
    expect(factText).toHaveClass("mt-2");
  });
});
