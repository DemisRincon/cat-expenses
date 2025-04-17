import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpenseForm, {
  ExpenseFormProps,
} from "../../src/components/ui/expense-form";

describe("ExpenseForm", () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  const defaultProps: ExpenseFormProps = {
    onSubmit: mockOnSubmit,
    onCancel: mockOnCancel,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form with initial empty values", () => {
    const { getByLabelText, getByText } = render(
      <ExpenseForm {...defaultProps} />
    );

    expect(getByLabelText("Item:")).toHaveValue("");
    expect(getByLabelText("Category:")).toHaveValue("");
    expect(getByLabelText("Amount:")).toHaveValue(null);
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("renders the form with initial data when provided", () => {
    const initialData = {
      item: "Cat Food",
      category: "Food",
      amount: "1200",
    };
    const { getByLabelText } = render(
      <ExpenseForm {...defaultProps} initialData={initialData} />
    );

    expect(getByLabelText("Item:")).toHaveValue("Cat Food");
    expect(getByLabelText("Category:")).toHaveValue("Food");
    expect(getByLabelText("Amount:")).toHaveValue(1200);
  });

  it("calls onSubmit with correct data when form is submitted", () => {
    const { getByLabelText, getByText } = render(
      <ExpenseForm {...defaultProps} />
    );

    fireEvent.change(getByLabelText("Item:"), { target: { value: "Bed" } });
    fireEvent.change(getByLabelText("Category:"), {
      target: { value: "Furniture" },
    });
    fireEvent.change(getByLabelText("Amount:"), { target: { value: "150" } });

    fireEvent.click(getByText("Submit"));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      item: "Bed",
      category: "Furniture",
      amount: 150,
    });
  });

  it("does not call onSubmit if form fields are incomplete", () => {
    const { getByText } = render(<ExpenseForm {...defaultProps} />);

    fireEvent.click(getByText("Submit"));

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    const { getByText } = render(<ExpenseForm {...defaultProps} />);

    fireEvent.click(getByText("Cancel"));

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
