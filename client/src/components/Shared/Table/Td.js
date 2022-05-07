const Td = ({ children }) => {
  return (
    <td className="border-0 bg-body-bg p-4 text-left align-middle font-semibold first:rounded-l-md last:rounded-r-md">
      {children}
    </td>
  );
};

export default Td;
