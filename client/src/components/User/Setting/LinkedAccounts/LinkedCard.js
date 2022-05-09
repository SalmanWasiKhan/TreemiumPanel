import AccountInfo from './AccountInfo';
import { useNavigate } from 'react-router-dom';

const LinkedCard = () => {
  const navigate = useNavigate();

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white shadow-card">
      <h4 className="border-b border-border p-5 text-lg font-medium  text-heading">
        Linked Account
      </h4>

      <div className="space-y-6 p-5">
        <AccountInfo id={1} bankName="Bank of America" number="1234567895421" />
        <AccountInfo
          id={2}
          bankName="Bank of America"
          number="1234567895421"
          verified
        />

        <div className="pt-4">
          <button
            className="rounded-full bg-primary px-6 py-3 font-medium text-white"
            onClick={() => navigate('/setting/linked-accounts/add')}
          >
            Add Bank Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedCard;
