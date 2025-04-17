import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomCatFact } from "./catFactSlice";
import type { AppDispatch } from "./store";

export enum Category {
  FOOD = "Food",
  FURNITURE = "Furniture",
  ACCESSORY = "Accessory",
}

export interface Expense {
  id: string;
  item: string;
  category: string;
  amount: number;
  selected: boolean;
  isMostExpensiveCategory: boolean;
}

interface ExpenseState {
  expenses: Expense[];
  moreExpensiveCategories: Category[];
  isSomeSelected: boolean;
  isDialogOpen: boolean;
}

const loadExpensesFromLocalStorage = (): Expense[] => {
  const storedExpenses = localStorage.getItem("expenses");
  return storedExpenses ? JSON.parse(storedExpenses) : [];
};

const calculateMoreExpensiveCategories = (expenses: Expense[]): Category[] => {
  const categoryTotals: Record<string, number> = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) + expense.amount;
  });

  const maxSpending = Math.max(...Object.values(categoryTotals));

  return Object.keys(categoryTotals)
    .filter((category) => categoryTotals[category] === maxSpending)
    .map((category) => category as Category);
};

const updateMostExpensiveCategoryFlag = (
  expenses: Expense[],
  moreExpensiveCategories: Category[]
): Expense[] => {
  return expenses.map((expense) => ({
    ...expense,
    isMostExpensiveCategory: moreExpensiveCategories.includes(
      expense.category as Category
    ),
  }));
};

const initialState: ExpenseState = {
  expenses: updateMostExpensiveCategoryFlag(
    loadExpensesFromLocalStorage(),
    calculateMoreExpensiveCategories(loadExpensesFromLocalStorage())
  ),
  isDialogOpen: false,
  moreExpensiveCategories: calculateMoreExpensiveCategories(
    loadExpensesFromLocalStorage()
  ),
  isSomeSelected: loadExpensesFromLocalStorage().some(
    (expense) => expense.selected
  ),
};

export type AddExpensePayload = Omit<
  Expense,
  "id" | "selected" | "isMostExpensiveCategory"
>;

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<AddExpensePayload>) => {
      const newExpense: Expense = {
        id: Date.now().toString(),
        ...action.payload,
        selected: false,
        isMostExpensiveCategory: false,
      };
      state.expenses.push(newExpense);
      state.moreExpensiveCategories = calculateMoreExpensiveCategories(
        state.expenses
      );
      state.expenses = updateMostExpensiveCategoryFlag(
        state.expenses,
        state.moreExpensiveCategories
      );
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },

    toggleExpenseSelection: (state, action: PayloadAction<string>) => {
      const expense = state.expenses.find((exp) => exp.id === action.payload);
      if (expense) {
        expense.selected = !expense.selected;
      }
      state.isSomeSelected = state.expenses.some((exp) => exp.selected);
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    deleteSelectedExpenses: (state) => {
      state.expenses = state.expenses.filter((expense) => !expense.selected);
      state.moreExpensiveCategories = calculateMoreExpensiveCategories(
        state.expenses
      );
      state.expenses = updateMostExpensiveCategoryFlag(
        state.expenses,
        state.moreExpensiveCategories
      );
      state.isSomeSelected = state.expenses.some((exp) => exp.selected);
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    },
    openDialog: (state) => {
      state.isDialogOpen = true;
    },
    closeDialog: (state) => {
      state.isDialogOpen = false;
    },
  },
});

export const {
  addExpense,
  toggleExpenseSelection,
  deleteSelectedExpenses,
  openDialog,
  closeDialog,
} = expenseSlice.actions;

export const openDialogWithCatFact = () => (dispatch: AppDispatch) => {
  dispatch(openDialog());
  dispatch(fetchRandomCatFact());
};

export default expenseSlice.reducer;
