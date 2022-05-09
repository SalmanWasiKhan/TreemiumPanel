import { UserIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/outline';
import BankIcon from '../../../../assets/icons/BankIcon';
import MenuCardButton from './MenuCardButton';

const MenuCard = () => {
  return (
    <div className="w-full rounded-2xl bg-white shadow-card">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Settings
      </h4>

      <div className="p-5">
        <MenuCardButton path="/setting/" label="Edit Profile" Icon={UserIcon} />
        <MenuCardButton
          path="/setting/preferences"
          label="Preferences"
          Icon={CogIcon}
        />
        <MenuCardButton
          path="/setting/linked-accounts"
          label="Linked Accounts"
          Icon={BankIcon}
        />
      </div>
    </div>
  );
};

export default MenuCard;
