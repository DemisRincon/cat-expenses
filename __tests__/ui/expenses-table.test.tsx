import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpenseTable, {
  ExpenseTableProps,
  ExpenseItem,
} from "../../src/components/ui/expenses-table";

describe("ExpenseTable", () => {
  const mockOnToggleSelection = jest.fn();

  const expenses: ExpenseItem[] = [
    {
      id: "1",
      item: "Laptop",
      category: "Electronics",
      amount: 1200,
      selected: false,
    },
    {
      id: "2",
      item: "Chair",
      category: "Furniture",
      amount: 150,
      selected: true,
    },
    {
      id: "3",
      item: "Notebook",
      category: "Stationery",
      amount: 5,
      selected: false,
    },
  ];

  const defaultProps: ExpenseTableProps = {
    expenses,
    onToggleSelection: mockOnToggleSelection,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table with correct data", () => {
    const { getByText } = render(<ExpenseTable {...defaultProps} />);

    expect(getByText("Laptop")).toBeInTheDocument();
    expect(getByText("Electronics")).toBeInTheDocument();
    expect(getByText("$1200")).toBeInTheDocument();

    expect(getByText("Chair")).toBeInTheDocument();
    expect(getByText("Furniture")).toBeInTheDocument();
    expect(getByText("$150")).toBeInTheDocument();

    expect(getByText("Notebook")).toBeInTheDocument();
    expect(getByText("Stationery")).toBeInTheDocument();
    expect(getByText("$5")).toBeInTheDocument();
  });

  it("renders checkboxes with correct selection state", () => {
    const { getAllByRole } = render(<ExpenseTable {...defaultProps} />);

    const checkboxes = getAllByRole("checkbox") as HTMLInputElement[];
    expect(checkboxes).toHaveLength(3);
    expect(checkboxes[0].checked).toBe(false);
    expect(checkboxes[1].checked).toBe(true);
    expect(checkboxes[2].checked).toBe(false);
  });

  it("calls onToggleSelection when a checkbox is clicked", () => {
    const { getAllByRole } = render(<ExpenseTable {...defaultProps} />);

    const checkboxes = getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(mockOnToggleSelection).toHaveBeenCalledWith("1");
    expect(mockOnToggleSelection).toHaveBeenCalledTimes(1);
  });

  it("applies correct styles for selected rows", () => {
    const { getByText } = render(<ExpenseTable {...defaultProps} />);

    const selectedRow = getByText("Chair").closest("tr");
    expect(selectedRow).toHaveClass("bg-blue-50");

    const unselectedRow = getByText("Laptop").closest("tr");
    expect(unselectedRow).not.toHaveClass("bg-blue-50");
  });
});
