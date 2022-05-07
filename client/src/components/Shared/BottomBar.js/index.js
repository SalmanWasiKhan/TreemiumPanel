import BottomBarButton from './BottomBarButton';
import { UserIcon, CogIcon } from '@heroicons/react/solid';

const BottomBar = () => {
  return (
    <nav className="flex items-center bg-primary md:hidden">
      <BottomBarButton path="/" label="Account" Icon={UserIcon} />
      <BottomBarButton path="/setting" label="Setting" Icon={CogIcon} />
    </nav>
  );
};

export default BottomBar;
