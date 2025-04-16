import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface ModalDialogProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  isOpen,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="absolute inset-0 bg-black opacity-75 flex items-center justify-center z-50"
          />
          <motion.div
            role="dialog"
            aria-labelledby="modal-title"
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%] h-[95%] md:max-w-2xl md:h-[60%] overflow-hidden">
              <h2 className="text-xl font-semibold mb-4">{title}</h2>
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default ModalDialog;
