import MenuCard from '../../../components/User/Setting/MenuCard';
import { useAuth } from '../../../contexts/AuthContext';
import SettingRouter from '../../../routes/SettingRouter';
const Setting = () => {
  const { user } = useAuth();
  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <p className="text-lg font-medium text-primary ">
          Welcome Back, <span className="text-heading">{user.name}</span>
        </p>

        <div className=" mt-8 grid w-full grid-cols-1 items-start gap-7 md:grid-cols-12">
          <div className="col-span-1 md:col-span-5 lg:col-span-3">
            <MenuCard />
          </div>

          <div className="col-span-1 md:col-span-7 lg:col-span-9">
            <SettingRouter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
