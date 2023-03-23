import React from 'react';
import useSuggestions from './hooks';
import './Suggestions.css'

const Suggestions = (props) => {
  const {
    suggestions,
    setSuggestions,
    recentHistory,
    setRecentHistory,
    isOpen,
    setIsOpen,
    onItemClick
  } = props;

  const {
    isSearchedWord,
    removeWord,
    dropdownRef
  } = useSuggestions(
    setSuggestions,
    recentHistory,
    setRecentHistory,
    setIsOpen
  );

  return (
    <>
      { isOpen && (
        <div
          ref={dropdownRef}
          className="dropdownContainer"
        >
          <div className="suggestionsDropdown">
            <div className={`${suggestions.length >= 1 ? 'line' : ''}`} />
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li className="suggestionList" key={index} onClick={() => onItemClick(suggestion)}>
                  <span className={`suggestionItem ${isSearchedWord(suggestion) ? 'alreadySearched' : ''}`}>
                    {suggestion}
                  </span>
                  <span className="delete" onClick={(event) => removeWord(event, suggestion)}>Delete</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Suggestions;
