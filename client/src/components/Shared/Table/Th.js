const Th = ({ children, className, ...props }) => {
  return (
    <th
      className={`border-0 bg-body-bg p-4 text-left align-middle font-semibold text-heading first:rounded-l-md last:rounded-r-md ${className}`}
      {...props}
    >
      {children}
    </th>
  );
};

export default Th;
