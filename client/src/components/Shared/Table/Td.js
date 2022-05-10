const Td = ({ children, className, ...props }) => {
  return (
    <td
      className={`border-0 bg-body-bg p-4 text-left align-middle font-semibold first:rounded-l-md last:rounded-r-md ${className}`}
      {...props}
    >
      {children}
    </td>
  );
};

export default Td;
