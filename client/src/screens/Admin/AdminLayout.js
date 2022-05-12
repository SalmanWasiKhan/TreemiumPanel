import BottomBar from '../../components/Shared/BottomBar.js';
import Header from '../../components/Shared/Header';
import Sidebar from '../../components/Shared/Sidebar';
import AdminRouter from '../../routes/AdminRouter';
import { UsersIcon, CashIcon } from '@heroicons/react/solid';
import { CashIcon as CashOutlineIcon } from '@heroicons/react/outline';
import BankIcon from '../../assets/icons/BankIcon.js';

const sidebarLinks = [
  {
    label: 'Users',
    path: '/admin/users',
    Icon: UsersIcon,
  },
  {
    label: 'Withdraw Requests',
    path: '/admin/withdraw-requests',
    Icon: CashIcon,
  },
  {
    label: 'Link Account Requests',
    path: '/admin/link-account-requests',
    Icon: BankIcon,
  },
];

const headerMenuLinks = [
  {
    label: 'Users',
    path: '/admin/users',
    Icon: UsersIcon,
  },
  {
    label: 'Withdraw Requests',
    path: '/admin/withdraw-requests',
    Icon: CashOutlineIcon,
  },
  {
    label: 'Link Account Requests',
    path: '/admin/link-account-requests',
    Icon: BankIcon,
  },
];

const AdminLayout = () => {
  return (
    <div className="h-full min-h-screen w-full ">
      <Sidebar links={sidebarLinks} admin />

      <div className="flex h-full min-h-screen flex-col md:ml-60">
        <Header links={headerMenuLinks} />
        <main className="flex-1">
          <AdminRouter />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default AdminLayout;
