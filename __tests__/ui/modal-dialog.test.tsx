import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalDialog from "../../src/components/ui/modal-dialog";

describe("ModalDialog", () => {
  const defaultProps = {
    isOpen: true,
    title: "Test Modal",
    children: <p>Modal content</p>,
  };

  it("renders the modal when isOpen is true", () => {
    const { getByText, getByRole } = render(<ModalDialog {...defaultProps} />);

    expect(getByRole("dialog")).toBeInTheDocument();
    expect(getByText("Test Modal")).toBeInTheDocument();
    expect(getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    const { queryByRole } = render(
      <ModalDialog {...defaultProps} isOpen={false} />
    );

    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("applies correct styles to the modal container", () => {
    const { getByRole } = render(<ModalDialog {...defaultProps} />);

    const modalContainer = getByRole("dialog");
    expect(modalContainer).toHaveClass(
      "fixed inset-0 flex items-center justify-center z-50"
    );
  });

  it("renders children content inside the modal", () => {
    const { getByText } = render(<ModalDialog {...defaultProps} />);

    expect(getByText("Modal content")).toBeInTheDocument();
  });
});
