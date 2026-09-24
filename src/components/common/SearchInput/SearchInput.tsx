import { useState } from 'react';
import { Input } from '../../ui/Input/Input';
import './SearchInput.css';

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export function SearchInput({
  value = '',
  placeholder = 'Search products...',
  onSearch,
}: SearchInputProps) {
  const [searchValue, setSearchValue] = useState(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch?.(searchValue.trim());
  };

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <Input
        id="product-search"
        value={searchValue}
        placeholder={placeholder}
        onChange={(event) => setSearchValue(event.target.value)}
        aria-label="Search products"
      />

      <button
        type="submit"
        className="search-input__button"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
}