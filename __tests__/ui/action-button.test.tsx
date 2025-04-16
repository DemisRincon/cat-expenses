import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton, {
  ActionButtonProps,
} from "../../src/components/ui/action-button";

describe("ActionButton", () => {
  const defaultProps: ActionButtonProps = {
    label: "Click Me",
    onClick: jest.fn(),
  };

  it("renders the button with the correct label", () => {
    render(<ActionButton {...defaultProps} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<ActionButton {...defaultProps} onClick={onClickMock} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies the default className", () => {
    render(<ActionButton {...defaultProps} />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass(
      "bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
    );
  });

  it("applies a custom className when provided", () => {
    render(<ActionButton {...defaultProps} className="custom-class" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<ActionButton {...defaultProps} disabled />);
    const button = screen.getByText("Click Me");
    expect(button).toBeDisabled();
  });

  it("is enabled when the disabled prop is false", () => {
    render(<ActionButton {...defaultProps} disabled={false} />);
    const button = screen.getByText("Click Me");
    expect(button).not.toBeDisabled();
  });

  it("sets the correct button type", () => {
    render(<ActionButton {...defaultProps} type="submit" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveAttribute("type", "submit");
  });
});
