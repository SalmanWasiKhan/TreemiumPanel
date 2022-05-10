const SelectField = ({
  label,
  name,
  placeholder,
  onClick,
  onBlur,
  value,
  error,
  options,
  Icon,
  noGap,
  ...props
}) => {
  return (
    <div className={`relative ${noGap ? 'mb-0' : 'mb-7'}`}>
      {label && (
        <label htmlFor={name} className="mb-4 block font-medium text-heading">
          {label}
        </label>
      )}

      <div className="box-border flex w-full divide-x divide-border rounded-ms border border-border bg-body-bg">
        {Icon && (
          <div className="flex items-center justify-center rounded-ms bg-white px-3 text-heading">
            <Icon className="h-7 w-7" />
          </div>
        )}
        <select
          id={name}
          className="block min-w-0 flex-1 rounded-ms border-0 bg-transparent px-5 font-medium text-heading transition duration-150 focus:ring-1 focus:ring-primary"
          placeholder={placeholder}
          value={value}
          onClick={onClick}
          onBlur={onBlur}
          {...props}
        >
          <option value="">Select</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      <span className="absolute bottom-0.5 -mb-5 block text-xs text-danger">
        {error}
      </span>
    </div>
  );
};

export default SelectField;
