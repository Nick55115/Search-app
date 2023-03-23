import React from 'react';
import useSearchBar from './hooks';
import './SearchBar.css'

const SearchBar = (props) => {
  const {
    searchTerm,
    suggestions,
    results,
    isOpen,
    toggleDropdown,
    setRecentHistory,
    searchTermChange,
    searchSubmit,
  } = props;
 
  const {
    inputRef
  } = useSearchBar(setRecentHistory);

  return (
      <div className={`search ${results.length >= 1 ? 'searchActive' : ''}`}>
        <div className={`container ${suggestions.length >= 1 && isOpen ? 'activeBar' : ''}`}>
          <div className="input" onClick={toggleDropdown}>
            <input
              type="text"
              className='searchInpput'
              value={searchTerm}
              onChange={searchTermChange}
              onKeyDown={searchSubmit}
              ref={inputRef}
            />
          </div>
        </div>
      </div>
  );
}

export default SearchBar;
