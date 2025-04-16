import React, { useState, type FormEvent, type ChangeEvent } from "react";

export interface ExpenseFormData {
  item: string;
  category: string;
  amount: string;
}

export interface ExpenseFormProps {
  onSubmit: (data: { item: string; category: string; amount: number }) => void;
  onCancel: () => void;
  initialData?: ExpenseFormData;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
}) => {
  const [formData, setFormData] = useState<ExpenseFormData>(
    initialData || {
      item: "",
      category: "",
      amount: "",
    }
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.item || !formData.category || !formData.amount) {
      return;
    }

    onSubmit({
      item: formData.item,
      category: formData.category,
      amount: Number.parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1">
      <div className="mb-4">
        <label htmlFor="item" className="block mb-2">
          Item:
        </label>
        <input
          type="text"
          id="item"
          name="item"
          placeholder="Item Name"
          value={formData.item}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block mb-2">
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Category</option>
          <option value="Food">Food</option>
          <option value="Furniture">Furniture</option>
          <option value="Accessory">Accessory</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Item amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
