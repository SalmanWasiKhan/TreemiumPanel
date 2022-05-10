import InstagramIcon from '../../../../../assets/icons/InstagramIcon';
import TwitterIcon from '../../../../../assets/icons/TwitterIcon';
import YoutubeIcon from '../../../../../assets/icons/YoutubeIcon';

const Socials = ({ user }) => {
  return (
    <div className="mt-5 flex gap-4">
      <a
        href={user.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a
        href={user.socials.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
      >
        <YoutubeIcon className="h-4 w-4" />
      </a>
      <a
        href={user.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
      >
        <TwitterIcon className="h-4 w-4" />
      </a>
    </div>
  );
};

export default Socials;
