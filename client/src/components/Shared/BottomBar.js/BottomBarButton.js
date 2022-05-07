import { Link } from 'react-router-dom';

const BottomBarButton = ({ path, label, Icon }) => {
  return (
    <Link
      to={path}
      className={`mb-1 flex flex-1 items-center justify-center gap-2.5 px-6 py-3 font-medium text-white opacity-75 transition duration-150 hover:opacity-100`}
    >
      <Icon className="h-6 w-6" />{' '}
      <span className="inline sm:inline">{label}</span>
    </Link>
  );
};

export default BottomBarButton;
