import { useSearchParams as _useSearchParams } from 'react-router-dom';

const useSearchParams = () => {
  const [search, setSearch] = _useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const setSearchParam = (key, value) => {
    setSearch({ ...searchAsObject, [key]: value });
  };

  return { search: searchAsObject, setSearch, setSearchParam };
};

export default useSearchParams;
