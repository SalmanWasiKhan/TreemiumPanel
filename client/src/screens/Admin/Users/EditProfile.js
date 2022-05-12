import BalanceCard from '../../../components/Admin/Users/EditProfile/BalanceCard';
import PersonalInfoCard from '../../../components/Admin/Users/EditProfile/PersonalInfoCard';
import ProfileCard1 from '../../../components/Admin/Users/EditProfile/ProfileCard1';
import ProfileCard2 from '../../../components/Admin/Users/EditProfile/ProfileCard2';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserAPI } from '../../../api';

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    UserAPI.getUser(id)
      .then((res) => {
        setUser(res);
      })
      .catch(() => {
        navigate('/admin/users');
      });
  }, [id]);

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
          <BalanceCard user={user} />
          <ProfileCard1 user={user} />
          <ProfileCard2 user={user} />
          <PersonalInfoCard user={user} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
