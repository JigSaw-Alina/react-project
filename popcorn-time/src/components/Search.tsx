import { useEffect, useRef } from 'react';
import type { SearchProps } from '@/types/movie';
import useKey from '@/hooks/usekey';

const Search = ({ query, setQuery }: SearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey({
    key: 'Enter',
    action: () => {
      // If input is already focused, do nothing
      if (document.activeElement === inputEl.current) return;

      // Otherwise, focus input and clear query
      inputEl.current?.focus();
      setQuery('');
    },
  });

  return (
    <>
      <input
        className="App__search"
        ref={inputEl}
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};

export default Search;
