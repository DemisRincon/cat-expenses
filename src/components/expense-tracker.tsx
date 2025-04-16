import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  toggleExpenseSelection,
  deleteSelectedExpenses,
  openDialogWithCatFact,
} from "../redux/expenseSlice";
import ActionButton from "./ui/action-button";
import ExpenseTable from "./ui/expenses-table";
import AddExpenseDialog from "./add-expens-dialog";

const ExpenseTracker: React.FC = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.expenses.expenses);

  const handleToggleSelection = (id: string) => {
    dispatch(toggleExpenseSelection(id));
  };

  const handleDeleteExpense = () => {
    dispatch(deleteSelectedExpenses());
  };

  const handleAddExpense = () => {
    dispatch(openDialogWithCatFact());
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex gap-4 mb-6 justify-between md:justify-end">
        <ActionButton label="Add Expense" onClick={handleAddExpense} />
        <ActionButton label="Delete Expense" onClick={handleDeleteExpense} />
      </div>

      <ExpenseTable
        expenses={expenses}
        onToggleSelection={handleToggleSelection}
      />
      <AddExpenseDialog />
    </div>
  );
};

export default ExpenseTracker;
