import dayjs from 'dayjs';

const Details = ({ user }) => {
  return (
    <ul>
      <li className="mb-2 flex items-center gap-6">
        <h5 className="font-medium text-heading">Address</h5>
        <span className="text-muted">{user.address}</span>
      </li>
      <li className="mb-2 flex items-center gap-6">
        <h5 className="font-medium text-heading">Total Log</h5>
        <span>
          {user.totalLogs} Time (Today {user.logsToday} Times)
        </span>
      </li>
      <li className="mb-2 flex items-center gap-6 text-danger">
        <h5 className="font-medium ">Last Log</h5>
        <span>{dayjs(user.lastLog).format('DD MMMM YYYY, HH:mm A')}</span>
      </li>
    </ul>
  );
};

export default Details;
