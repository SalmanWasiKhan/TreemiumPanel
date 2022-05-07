import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import useSearchParams from '../../../hooks/useSearchParams';

const SearchBar = () => {
  const { search, setSearchParam } = useSearchParams();
  const [value, setValue] = useState(search.q);

  return (
    <form
      className="relative flex w-full overflow-hidden rounded-md border border-border bg-body-bg transition focus-within:border-primary "
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParam('q', value);
      }}
    >
      <input
        type="text"
        className="min-w-[40px] flex-1 flex-shrink border-0 bg-transparent py-2.5 px-5 font-medium text-heading placeholder:font-medium placeholder:text-heading focus:ring-0"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="flex flex-shrink-0 items-center justify-center bg-primary px-3 text-white "
      >
        <SearchIcon className="h-6 w-6" />
      </button>
    </form>
  );
};

export default SearchBar;
