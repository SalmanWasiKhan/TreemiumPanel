import dayjs from 'dayjs';
import BasicInfo from './BasicInfo';
import Details from './Details';
import Socials from './Socials';

const InfoCard = ({ user }) => {
  // const user = {
  //   name: 'Carla Pascle',
  //   phone: '+1 235 5547',
  //   email: 'hello@example.com',
  //   address: 'House 14, Road 9, Gulshan, Dhaka',
  //   totalLogs: 103,
  //   logsToday: 5,
  //   lastLog: dayjs('2020-02-03T22:00:00.000Z').toDate(),
  //   socials: {
  //     instagram: 'https://instagram.com',
  //     twitter: 'https://twitter.com',
  //     youtube: 'https://youtube.com',
  //   },
  // };

  return (
    <div className="col-span-2 w-full rounded-2xl bg-white p-5 shadow-card lg:col-span-1">
      <BasicInfo user={user} />
      <Details user={user} />
      {/* <Socials user={user} /> */}
    </div>
  );
};

export default InfoCard;
