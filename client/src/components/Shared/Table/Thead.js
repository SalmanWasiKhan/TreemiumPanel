const Thead = ({ children, className, ...props }) => {
  return (
    <thead className={` z-10 shadow-card ${className}`} {...props}>
      {children}
    </thead>
  );
};

export default Thead;
