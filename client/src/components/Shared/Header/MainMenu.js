import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const MainMenu = ({ links }) => {
  const { logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative z-30">
      <Menu.Button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-body-bg">
        <UserIcon className="h-5 w-5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-100 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-border overflow-hidden rounded-md bg-white shadow-menu focus:outline-none">
          {links?.map(({ label, path, Icon }) => (
            <Menu.Item key={label}>
              <Link
                to={path}
                className="group flex w-full items-center gap-4 px-4 py-4 font-medium transition hover:bg-primary hover:text-white"
              >
                <Icon className="h-5 w-5 text-primary transition group-hover:text-white" />
                {label}
              </Link>
            </Menu.Item>
          ))}

          <Menu.Item>
            <button
              className="flex w-full gap-4 px-4 py-4 font-medium text-danger transition hover:bg-border/5"
              onClick={() =>
                logout(() => {
                  if (isAdmin) {
                    navigate('/admin/login');
                  } else navigate('/login');
                })
              }
            >
              Logout
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MainMenu;
