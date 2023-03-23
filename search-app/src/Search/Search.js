import React from 'react';
import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import Suggestions from '../Suggestions/Suggestions';
import useSearch from './hooks';
import './Search.css'

const Search = () => {
    const {
        searchTerm,
        suggestions,
        setSuggestions,
        recentHistory,
        setRecentHistory,
        results,
        isOpen,
        setIsOpen,
        filterTime,
        toggleDropdown,
        searchTermChange,
        searchSubmit,
        onItemClick,
    } = useSearch();

    return (
        <div className="content">
            <SearchBar
                searchTerm={searchTerm}
                suggestions={suggestions}
                setRecentHistory={setRecentHistory}
                results={results}
                isOpen={isOpen}
                toggleDropdown={toggleDropdown}
                searchTermChange={searchTermChange}
                searchSubmit={searchSubmit}
            />
            <Suggestions
                suggestions={suggestions}
                setSuggestions={setSuggestions}
                recentHistory={recentHistory}
                setRecentHistory={setRecentHistory}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onItemClick={onItemClick}
            />
            <Results results={results} />
            { results.length >= 1 && <span className="timer">It took {filterTime} milliseconds to complete the search</span>}
        </div>

    );
}

export default Search;
