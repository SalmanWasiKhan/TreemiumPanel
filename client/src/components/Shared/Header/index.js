import MainMenu from './MainMenu';
import SearchBar from './SearchBar';
import logo from '../../../assets/images/logo.png';

const Header = ({ links }) => {
  return (
    <header className="z-100 bg-body-bg py-2.5">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-4 px-4 lg:max-w-6xl">
        <div className="flex flex-1 items-center gap-4">
          <img src={logo} alt="Treemium" className="block w-7 md:hidden" />
          <div className="w-44 sm:flex-grow md:w-96 md:flex-grow-0">
            {/* <SearchBar /> */}
          </div>
        </div>
        <MainMenu links={links} />
      </div>
    </header>
  );
};

export default Header;
