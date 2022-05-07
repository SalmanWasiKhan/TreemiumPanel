import MainMenu from './MainMenu';
import SearchBar from './SearchBar';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-body-bg py-2.5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="flex flex-1 items-center gap-4">
          <img src={logo} alt="Treemium" className="block w-7 md:hidden" />
          <div className="mr-4 w-44 sm:w-auto sm:flex-1 md:w-96 md:flex-grow-0">
            <SearchBar />
          </div>
        </div>
        <MainMenu />
      </div>
    </header>
  );
};

export default Header;
