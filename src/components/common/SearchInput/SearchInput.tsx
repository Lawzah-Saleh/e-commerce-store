import { Search, X } from 'lucide-react';
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

  const handleClear = () => {
    setSearchValue('');
    onSearch?.('');
  };

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <Input
        id="product-search"
        value={searchValue}
        placeholder={placeholder}
        onChange={(event) => setSearchValue(event.target.value)}
        aria-label="Search products"
        leftElement={
          <button
            type="submit"
            className="search-input__search-button"
            aria-label="Search products"
          >
            <Search size={18} strokeWidth={2} />
          </button>
        }
        rightElement={
          searchValue ? (
            <button
              type="button"
              className="search-input__clear-button"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <X size={16} strokeWidth={2} />
            </button>
          ) : null
        }
      />
    </form>
  );
}