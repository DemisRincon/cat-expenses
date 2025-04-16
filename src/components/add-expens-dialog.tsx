import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addExpense, closeDialog } from "../redux/expenseSlice";
import ModalDialog from "./ui/modal-dialog";
import ExpenseForm from "./ui/expense-form";
import CatFactDisplay from "./ui/cat-fact-display";
import { motion } from "framer-motion";
const AddExpenseDialog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.expenses.isDialogOpen);
  const catFact = useAppSelector((state) => state.catFact.fact);
  const catFactStatus = useAppSelector((state) => state.catFact.status);

  const handleSubmit = (data: {
    item: string;
    category: string;
    amount: number;
  }): void => {
    dispatch(addExpense(data));
    dispatch(closeDialog());
  };

  const handleCancel = (): void => {
    dispatch(closeDialog());
  };

  return (
    <ModalDialog isOpen={isOpen} title="Expense Detail">
      <div className="flex flex-col md:flex-row gap-4">
        <ExpenseForm onSubmit={handleSubmit} onCancel={handleCancel} />
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="ml-6 w-64"
        >
          <CatFactDisplay
            fact={catFact}
            isLoading={catFactStatus === "loading"}
          />
        </motion.div>
      </div>
    </ModalDialog>
  );
};

export default AddExpenseDialog;
