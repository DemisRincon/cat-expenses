import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";
import catFactReducer from "./catFactSlice";
export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    catFact: catFactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
