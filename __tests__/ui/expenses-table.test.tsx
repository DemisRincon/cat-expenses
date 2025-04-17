import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpenseTable, {
  ExpenseTableProps,
} from "../../src/components/ui/expenses-table";
import { Expense } from "../../src/redux/expenseSlice";

describe("ExpenseTable", () => {
  const mockOnToggleSelection = jest.fn();

  const expenses: Expense[] = [
    {
      id: "1",
      item: "Cat Food",
      category: "Food",
      amount: 50,
      selected: false,
      isMostExpensiveCategory: true,
    },
    {
      id: "2",
      item: "Litter Box",
      category: "Supplies",
      amount: 30,
      selected: true,
      isMostExpensiveCategory: false,
    },
    {
      id: "3",
      item: "Cat Toy",
      category: "Toys",
      amount: 10,
      selected: false,
      isMostExpensiveCategory: false,
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

    expect(getByText("Cat Food")).toBeInTheDocument();
    expect(getByText("Food")).toBeInTheDocument();
    expect(getByText("$50")).toBeInTheDocument();

    expect(getByText("Litter Box")).toBeInTheDocument();
    expect(getByText("Supplies")).toBeInTheDocument();
    expect(getByText("$30")).toBeInTheDocument();

    expect(getByText("Cat Toy")).toBeInTheDocument();
    expect(getByText("Toys")).toBeInTheDocument();
    expect(getByText("$10")).toBeInTheDocument();
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

    const selectedRow = getByText("Cat Food").closest("tr");
    expect(selectedRow).toHaveClass("bg-blue-50");

    const unselectedRow = getByText("Litter Box").closest("tr");
    expect(unselectedRow).not.toHaveClass("bg-blue-50");
  });
});
