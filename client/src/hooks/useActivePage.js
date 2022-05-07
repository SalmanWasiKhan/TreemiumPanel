import { useLocation } from "react-router-dom";

const useActivePage = () => {
  const { pathname } = useLocation();

  const activePage = pathname.split("/")[1];
  const subPage = pathname.split("/")[2];

  return { activePage, subPage };
};

export default useActivePage;
