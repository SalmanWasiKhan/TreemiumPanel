import BalanceCard from '../../../components/Admin/Users/EditProfile/BalanceCard';
import PersonalInfoCard from '../../../components/Admin/Users/EditProfile/PersonalInfoCard';
import ProfileCard1 from '../../../components/Admin/Users/EditProfile/ProfileCard1';
import ProfileCard2 from '../../../components/Admin/Users/EditProfile/ProfileCard2';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-[85vh] overflow-auto py-5">
      <div className="mx-auto max-w-lg px-4 md:max-w-6xl">
        <div>
          <button
            type="button"
            className="rounded-full bg-primary px-12 py-3 font-medium text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          <BalanceCard />
          <ProfileCard1 />
          <ProfileCard2 />
          <PersonalInfoCard />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
