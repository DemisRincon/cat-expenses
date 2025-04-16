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
  className = "",
  type = "button",
}) => {
  const baseClassName = "text-white font-medium py-2 px-4 rounded ";
  const enabledClassName = "bg-indigo-500 hover:bg-indigo-600 cursor-pointer";
  const disabledClassName = "bg-gray-400 cursor-not-allowed";

  return (
    <button
      className={`${baseClassName} ${
        disabled ? disabledClassName : enabledClassName
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default ActionButton;
