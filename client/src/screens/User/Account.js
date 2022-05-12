import ActivitiesCard from '../../components/User/Account/ActivitiesCard';
import InfoCard from '../../components/User/Account/InfoCard';
import WalletCard from '../../components/User/Account/WalletCard';
import Withdraw from '../../components/User/Account/Withdraw';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { UserAPI } from '../../api';

const Account = () => {
  const { user: authUser } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserAPI.getUser(authUser._id).then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <p className="text-lg font-medium text-primary ">
          Welcome Back, <span className="text-heading">{authUser.name}</span>
        </p>

        <div className="mt-8 grid grid-cols-2 items-start gap-7">
          {loading ? (
            <div className="col-span-1 text-center lg:col-span-2">
              Loading...
            </div>
          ) : (
            <>
              <InfoCard user={user} />
              <WalletCard user={user} />
              <Withdraw user={user} />
              <ActivitiesCard user={user} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
