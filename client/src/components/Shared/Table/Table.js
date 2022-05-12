const Table = ({ children, className, ...props }) => {
  return (
    <table
      className={`table-spacing z-0 w-full border-separate ${className}`}
      {...props}
    >
      {children}
    </table>
  );
};

export default Table;
