import React, { useState, type FormEvent, type ChangeEvent } from "react";
import InputLabel from "./input-label";
import { motion } from "framer-motion";
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

  const [formErrors, setFormErrors] = useState<Partial<ExpenseFormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<ExpenseFormData> = {};

    if (!formData.item.trim()) {
      errors.item = "Item is required.";
    }

    if (!formData.category) {
      errors.category = "Category is required.";
    }

    if (
      !formData.amount ||
      isNaN(Number(formData.amount)) ||
      Number(formData.amount) <= 0
    ) {
      errors.amount = "Amount must be a positive number.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      item: formData.item,
      category: formData.category,
      amount: Number.parseFloat(formData.amount),
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="flex-1"
    >
      <InputLabel htmlFor="item" label="Item" error={formErrors.item}>
        <input
          type="text"
          id="item"
          name="item"
          placeholder="Item Name"
          value={formData.item}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </InputLabel>

      <InputLabel
        htmlFor="category"
        label="Category"
        error={formErrors.category}
      >
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
      </InputLabel>

      <InputLabel htmlFor="amount" label="Amount" error={formErrors.amount}>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Item amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </InputLabel>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

export default ExpenseForm;
