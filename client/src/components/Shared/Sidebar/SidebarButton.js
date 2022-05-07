import useActivePage from '../../../hooks/useActivePage';
import { Link } from 'react-router-dom';

const SidebarButton = ({ path, label, Icon }) => {
  const { activePage } = useActivePage();

  return (
    <Link
      to={path}
      className={`mb-1 flex items-center gap-2.5 px-2 py-3 font-medium transition duration-150 hover:text-primary ${
        '/' + activePage === path ? 'text-primary' : ''
      }`}
    >
      <Icon className="h-6 w-6" /> {label}
    </Link>
  );
};

export default SidebarButton;
