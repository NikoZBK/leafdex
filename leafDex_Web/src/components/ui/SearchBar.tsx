import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search plants...',
  value,
  onChange,
  onSearch,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <div className="form-control w-full">
      <div className="input-group">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-square" onClick={onSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
