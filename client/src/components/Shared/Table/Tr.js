const Tr = ({ children, className, ...props }) => {
  return (
    <tr className={`${className}`} {...props}>
      {children}
    </tr>
  );
};

export default Tr;
