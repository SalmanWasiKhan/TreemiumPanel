import { useState } from 'react';
import BankIcon from '../../../../assets/icons/BankIcon';
import {
  EyeIcon,
  EyeOffIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { UserAPI } from '../../../../api';

const AccountInfo = ({ id, bankName, number, verified, reload }) => {
  const navigate = useNavigate();
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const hideAccountNumber = (number) => {
    const last4Digits = number.substring(number.length - 4);
    const stars = '*'.repeat(number.length - 4);
    return `${stars}${last4Digits}`;
  };

  const removeAccount = () => {
    UserAPI.deleteBankAccount(id).then(() => {
      reload();
    });
  };

  return (
    <div className="grid grid-cols-4 items-center gap-8">
      <div className="col-span-3 flex flex-1 items-center justify-between rounded-ms border border-border p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <BankIcon className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-medium  text-heading">{bankName}</h4>
            <p>{showAccountInfo ? number : hideAccountNumber(number)}</p>
          </div>
        </div>

        <div className="space-x-2">
          <button
            className="transition hover:text-primary"
            onClick={() => setShowAccountInfo(!showAccountInfo)}
          >
            {showAccountInfo ? (
              <EyeOffIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
          <button
            className="transition hover:text-primary"
            onClick={() => navigate(`/edit-bank-account/${id}`)}
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button className="text-danger" onClick={removeAccount}>
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-border text-white ${
            verified === 'approved'
              ? 'bg-success'
              : verified === 'pending'
              ? 'bg-primary'
              : 'bg-danger'
          }`}
        >
          {verified === 'approved' && <CheckIcon className="h-6 w-6" />}
        </div>
        {verified === 'approved' ? (
          <p className="cursor-pointer hover:text-primary">Verified</p>
        ) : verified === 'pending' ? (
          <p className="cursor-pointer hover:text-primary">Pending</p>
        ) : (
          <p className="cursor-pointer hover:text-primary">Not Verified</p>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
