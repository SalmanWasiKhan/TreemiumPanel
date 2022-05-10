const Tbody = ({ children, className, ...props }) => {
  return (
    <tbody className={`${className}`} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
