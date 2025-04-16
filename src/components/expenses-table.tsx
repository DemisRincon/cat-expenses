import React from "react";

const ExpensesTable: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex gap-4 mb-6">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
          Add Expense
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
          Delete Expense
        </button>
      </div>

      <div className="border border-gray-300 rounded">
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
              <th className="p-3 text-left font-medium text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 text-center">
                <input type="checkbox" className="h-4 w-4" />
              </td>
              <td className="p-3 border-r border-gray-300">
                Whiskers Cat food
              </td>
              <td className="p-3 border-r border-gray-300">Food</td>
              <td className="p-3">10$</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 text-center">
                <input type="checkbox" className="h-4 w-4" />
              </td>
              <td className="p-3 border-r border-gray-300">
                Self cleaning cat Litter box
              </td>
              <td className="p-3 border-r border-gray-300">Furniture</td>
              <td className="p-3">500$</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 text-center">
                <input type="checkbox" className="h-4 w-4" checked readOnly />
              </td>
              <td className="p-3 border-r border-gray-300">
                Diamond Cat collar
              </td>
              <td className="p-3 border-r border-gray-300">Accessory</td>
              <td className="p-3">1000$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesTable;
