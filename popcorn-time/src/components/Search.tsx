import type { SearchProps } from '@/types/Movie';

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <>
      <input
        className="App__search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
