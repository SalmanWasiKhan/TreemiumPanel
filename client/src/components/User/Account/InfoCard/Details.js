import dayjs from 'dayjs';

const Details = ({ user }) => {
  return (
    <ul>
      <li className="mb-2 space-x-6">
        <h5 className="inline font-medium text-heading">Address</h5>
        <span className="text-muted">{user.address || 'Not Provided'}</span>
      </li>
      {/* <li className="mb-2 space-x-6">
        <h5 className="inline font-medium text-heading">Total Log</h5>
        <span>
          {user.totalLogs} Time (Today {user.logsToday} Times)
        </span>
      </li> */}
      <li className="mb-2 space-x-6 text-danger">
        <h5 className="inline font-medium">Last Log</h5>
        <span>{dayjs(user.lastLog).format('DD MMMM YYYY, HH:mm A')}</span>
      </li>
    </ul>
  );
};

export default Details;
