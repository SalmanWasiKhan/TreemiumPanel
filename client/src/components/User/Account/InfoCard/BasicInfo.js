import { PhoneIcon, MailIcon, UserIcon } from '@heroicons/react/solid';

const BasicInfo = ({ user }) => {
  return (
    <div className="mb-5 flex gap-4 border-b border-border pb-5">
      <div className="h-16 w-16 flex-shrink-0 rounded-full bg-muted">
        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/80 ">
            <UserIcon className="h-10 w-10" />
          </div>
        )}
      </div>
      <div className="">
        <span className="block">Hello</span>
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
