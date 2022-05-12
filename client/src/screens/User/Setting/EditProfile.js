import { useEffect, useState } from 'react';
import { UserAPI } from '../../../api';
import PersonalInfoCard from '../../../components/User/Setting/EditProfile/PersonalInfoCard';
import ProfileCard1 from '../../../components/User/Setting/EditProfile/ProfileCard1';
import ProfileCard2 from '../../../components/User/Setting/EditProfile/ProfileCard2';
import { useAuth } from '../../../contexts/AuthContext';

const EditProfile = () => {
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
    <div className="grid grid-cols-2 items-start gap-7">
      {loading ? (
        <div className="col-span-1 text-center">Loading...</div>
      ) : (
        <>
          <ProfileCard1 user={user} />
          <ProfileCard2 user={user} />
          <PersonalInfoCard user={user} />
        </>
      )}
    </div>
  );
};

export default EditProfile;
