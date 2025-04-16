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
  isSomeSelected: boolean;
  isDialogOpen: boolean;
}

const loadExpensesFromLocalStorage = (): Expense[] => {
  const storedExpenses = localStorage.getItem("expenses");
  return storedExpenses ? JSON.parse(storedExpenses) : [];
};

const initialState: ExpenseState = {
  expenses: loadExpensesFromLocalStorage(),
  isDialogOpen: false,
  isSomeSelected: false,
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

// Thunk action to open dialog and fetch a cat fact
export const openDialogWithCatFact = () => (dispatch: AppDispatch) => {
  dispatch(openDialog());
  dispatch(fetchRandomCatFact());
};

export default expenseSlice.reducer;
