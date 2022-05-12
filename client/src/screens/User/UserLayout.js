import BottomBar from '../../components/Shared/BottomBar.js';
import Header from '../../components/Shared/Header';
import Sidebar from '../../components/Shared/Sidebar';
import UserRouter from '../../routes/UserRouter';
import { UserIcon, CogIcon } from '@heroicons/react/solid';
import { CogIcon as CogOutlineIcon } from '@heroicons/react/outline';

const sidebarLinks = [
  {
    label: 'Account',
    path: '/',
    Icon: UserIcon,
  },
  {
    label: 'Setting',
    path: '/setting',
    Icon: CogIcon,
  },
];

const headerMenuLinks = [
  {
    label: 'Account',
    path: '/',
    Icon: UserIcon,
  },
  {
    label: 'Setting',
    path: '/setting',
    Icon: CogOutlineIcon,
  },
];

const UserLayout = () => {
  return (
    <div className="h-full min-h-screen w-full ">
      <Sidebar links={sidebarLinks} />

      <div className="flex h-full min-h-screen flex-col md:ml-60">
        <Header links={headerMenuLinks} />
        <main className="flex-1">
          <UserRouter />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default UserLayout;
