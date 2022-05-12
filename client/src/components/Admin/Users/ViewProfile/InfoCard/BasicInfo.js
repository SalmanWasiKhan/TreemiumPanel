import { PhoneIcon, MailIcon } from '@heroicons/react/solid';

const BasicInfo = ({ user }) => {
  return (
    <div className="mb-5 flex gap-4 border-b border-border pb-5">
      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-body-text">
        {user?.profilePic && (
          <img
            src={user.profilePic}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="">
        {/* <span className="block">Hello</span> */}
        <h4 className="mb-2 text-lg font-medium text-heading">{user.name}</h4>
        <p className="mb-1 flex flex-wrap items-center gap-2">
          <PhoneIcon className="h-4 w-4 text-primary" />
          {user.phone || 'Not Provided'}
        </p>
        <p className="mb-1 flex flex-wrap items-center gap-2">
          <MailIcon className="h-5 w-5 text-primary" />
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default BasicInfo;
