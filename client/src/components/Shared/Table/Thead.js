const Thead = ({ children, className, ...props }) => {
  return (
    <thead className={`sticky top-0 shadow-card ${className}`} {...props}>
      {children}
    </thead>
  );
};

export default Thead;
