import React, { ReactNode } from "react";

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
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center z-50" />
      <div
        role="dialog"
        aria-labelledby="modal-title"
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%] h-[95%] md:max-w-2xl md:h-[60%] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalDialog;
