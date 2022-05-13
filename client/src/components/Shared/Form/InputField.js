const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  onClick,
  onBlur,
  value,
  error,
  ...props
}) => {
  return (
    <div className="relative mb-7">
      <label htmlFor={name} className="mb-4 block font-medium text-heading">
        {label}
      </label>

      <input
        id={name}
        type={type}
        className="block w-full rounded-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading/60 focus:border-primary focus:ring-0"
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        {...props}
      />

      <span className="absolute bottom-0.5 -mb-5 block text-xs text-danger">
        {error}
      </span>
    </div>
  );
};

export default InputField;
