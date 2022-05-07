import InfoCard from '../../components/User/Account/InfoCard';
import { useAuth } from '../../contexts/AuthContext';

const Account = () => {
  const { user } = useAuth();

  return (
    <div className="py-5">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-lg font-medium text-primary ">
          Welcome Back, <span className="text-heading">{user.name}</span>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-7">
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Account;
