interface InputLabelProps {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  error?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  htmlFor,
  label,
  children,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={htmlFor} className="block mb-2">
      {label}:
    </label>
    {children}
    <div className="h-5">
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  </div>
);

export default InputLabel;
