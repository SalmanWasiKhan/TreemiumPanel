import logo from '../../../assets/images/logo.png';
import SidebarButton from './SidebarButton';
import { UserIcon, CogIcon } from '@heroicons/react/solid';
import YoutubeIcon from '../../../assets/icons/YoutubeIcon';
import InstagramIcon from '../../../assets/icons/InstagramIcon';
import TwitterIcon from '../../../assets/icons/TwitterIcon';

const Sidebar = () => {
  return (
    <aside className="hidden w-60 flex-col p-7 md:flex">
      <div className="py-4">
        <div className="w-8">
          <img
            src={logo}
            alt="Treemium"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="mt-2.5 text-lg font-bold leading-6 text-heading">
          Treemium
        </span>
      </div>

      <nav className="mt-7 flex-1 border-t border-border py-12">
        <SidebarButton path="/" label="Account" Icon={UserIcon} />
        <SidebarButton path="/setting" label="Setting" Icon={CogIcon} />
      </nav>

      <div className="">
        <div className="flex gap-3">
          <a
            href="http://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-2 text-sm">© 2022 Quixlab</p>
      </div>
    </aside>
  );
};

export default Sidebar;
