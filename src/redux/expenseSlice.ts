import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomCatFact } from "./catFactSlice";
import type { AppDispatch } from "./store";

export interface Expense {
  id: string;
  item: string;
  category: string;
  amount: number;
  selected: boolean;
}

interface ExpenseState {
  expenses: Expense[];
  isDialogOpen: boolean;
}

const initialState: ExpenseState = {
  expenses: [],
  isDialogOpen: false,
};

export type AddExpensePayload = Omit<Expense, "id" | "selected">;

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<AddExpensePayload>) => {
      const newExpense: Expense = {
        id: Date.now().toString(),
        ...action.payload,
        selected: false,
      };
      state.expenses.push(newExpense);
    },
    toggleExpenseSelection: (state, action: PayloadAction<string>) => {
      const expense = state.expenses.find((exp) => exp.id === action.payload);
      if (expense) {
        expense.selected = !expense.selected;
      }
    },
    deleteSelectedExpenses: (state) => {
      state.expenses = state.expenses.filter((expense) => !expense.selected);
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

// Thunk action to open dialog and fetch a cat fact
export const openDialogWithCatFact = () => (dispatch: AppDispatch) => {
  dispatch(openDialog());
  dispatch(fetchRandomCatFact());
};

export default expenseSlice.reducer;
