import MainMenu from './MainMenu';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-body-bg py-2.5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <SearchBar />
        <MainMenu />
      </div>
    </header>
  );
};

export default Header;
