import InfoCard from '../../components/User/Account/InfoCard';
import WalletCard from '../../components/User/Account/WalletCard';
import Withdraw from '../../components/User/Account/Withdraw';
import { useAuth } from '../../contexts/AuthContext';

const Account = () => {
  const { user } = useAuth();

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <p className="text-lg font-medium text-primary ">
          Welcome Back, <span className="text-heading">{user.name}</span>
        </p>

        <div className="mt-8 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          <InfoCard />
          <WalletCard />
          <Withdraw />
        </div>
      </div>
    </div>
  );
};

export default Account;
