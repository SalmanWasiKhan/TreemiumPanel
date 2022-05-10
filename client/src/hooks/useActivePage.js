import { useLocation } from 'react-router-dom';

const useActivePage = (admin) => {
  let { pathname } = useLocation();

  if (admin) {
    pathname = pathname.replace('/admin', '');
  }

  const activePage = pathname.split('/')[1];
  const subPage = pathname.split('/')[2];

  return { activePage, subPage };
};

export default useActivePage;
