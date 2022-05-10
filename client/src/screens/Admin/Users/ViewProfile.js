import InfoCard from '../../../components/Admin/Users/ViewProfile/InfoCard';
import WalletCard from '../../../components/Admin/Users/ViewProfile/WalletCard';
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2">
          <InfoCard />
          <WalletCard />

          <div>
            <button
              type="button"
              className="rounded-full bg-primary px-12 py-3 font-medium text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
