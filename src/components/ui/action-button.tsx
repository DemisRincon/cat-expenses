import React from "react";

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded",
  type = "button",
}) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {label}
  </button>
);

export default ActionButton;
