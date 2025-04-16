import React from "react";
import noexpenses from "../../assets/noexpenses.webp";
export interface ExpenseItem {
  id: string;
  item: string;
  category: string;
  amount: number;
  selected: boolean;
}

export interface ExpenseTableProps {
  expenses: ExpenseItem[];
  onToggleSelection: (id: string) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({
  expenses,
  onToggleSelection,
}) => (
  <div className="border border-gray-300 rounded bg-white">
    {expenses.length === 0 ? (
      <div className="pt-4 text-center text-gray-500">
        <h2 className="text-3xl">No expenses to display. Prrrr.</h2>
        <img
          src={noexpenses}
          alt="No expenses"
          className="mx-auto mt-4 h-32 w-32"
        />
      </div>
    ) : (
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="w-12 p-3 border-r border-gray-300"></th>
            <th className="p-3 text-left font-medium text-gray-700 border-r border-gray-300">
              Item
            </th>
            <th className="p-3 text-left font-medium text-gray-700 border-r border-gray-300">
              Category
            </th>
            <th className="p-3 text-left font-medium text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className={`${expense.selected ? "bg-blue-50" : ""} ${
                expense.id !== expenses[expenses.length - 1].id
                  ? "border-b border-gray-300"
                  : ""
              }`}
            >
              <td className="p-3 border-r border-gray-300 text-center">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={expense.selected}
                  onChange={() => onToggleSelection(expense.id)}
                />
              </td>
              <td className="p-3 border-r border-gray-300">{expense.item}</td>
              <td className="p-3 border-r border-gray-300">
                {expense.category}
              </td>
              <td className="p-3">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default ExpenseTable;
