import AccountInfo from './AccountInfo';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { UserAPI } from '../../../../api';

const LinkedCard = () => {
  const navigate = useNavigate();

  const { user: authUser } = useAuth();
  const [bankAccounts, setBankAccounts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAccounts = () => {
    setLoading(true);
    UserAPI.getBankAccounts({ user: authUser._id }).then((res) => {
      setBankAccounts(res.bankAccounts);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white shadow-card">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Linked Account
      </h4>

      <div className="space-y-6 p-5">
        {loading ? (
          <div className="text-center">
            <div className="text-xl font-medium">Loading...</div>
          </div>
        ) : (
          <>
            {bankAccounts?.map((bankAccount) => {
              return (
                <AccountInfo
                  key={bankAccount._id}
                  id={bankAccount._id}
                  bankName={bankAccount.bankName}
                  number={bankAccount.iban}
                  verified={bankAccount.status}
                  reload={getAccounts}
                />
              );
            })}
          </>
        )}

        <div className="pt-4">
          <button
            className="rounded-full bg-primary px-6 py-3 font-medium text-white"
            onClick={() => navigate('/add-bank-account')}
          >
            Add Bank Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedCard;
