import useActivePage from '../../../../hooks/useActivePage';
import { Link } from 'react-router-dom';

const MenuCardButton = ({ path, label, Icon }) => {
  const { activePage, subPage } = useActivePage();

  return (
    <Link
      to={path}
      className={`mb-1 flex items-center gap-2.5 px-2 py-3 font-medium transition duration-150 hover:text-primary ${
        `/${activePage}/${subPage}` === path ? 'text-primary' : ''
      }`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" /> {label}
    </Link>
  );
};

export default MenuCardButton;
