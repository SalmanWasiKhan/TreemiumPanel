import useActivePage from '../../../hooks/useActivePage';
import { Link } from 'react-router-dom';

const SidebarButton = ({ path, label, Icon, admin }) => {
  const { activePage } = useActivePage(admin);

  const isActive =
    '/' + activePage === (admin ? path.replace('/admin', '') : path);

  return (
    <Link
      to={path}
      className={`mb-1 flex items-center gap-2.5 px-2 py-3 font-medium transition duration-150 hover:text-primary ${
        isActive ? 'text-primary' : ''
      }`}
    >
      <Icon className="h-6 w-6" /> {label}
    </Link>
  );
};

export default SidebarButton;
