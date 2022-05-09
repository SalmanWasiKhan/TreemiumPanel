import PersonalInfoCard from '../../../components/User/Setting/EditProfile/PersonalInfoCard';
import ProfileCard1 from '../../../components/User/Setting/EditProfile/ProfileCard1';
import ProfileCard2 from '../../../components/User/Setting/EditProfile/ProfileCard2';

const EditProfile = () => {
  return (
    <div className="grid grid-cols-2 items-start gap-7">
      <ProfileCard1 />
      <ProfileCard2 />
      <PersonalInfoCard />
    </div>
  );
};

export default EditProfile;
