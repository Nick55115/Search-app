import { useState } from 'react';
import data from '../data.json';

const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [recentHistory, setRecentHistory] = useState([]);
    const [results, setResult] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const [filterTime, setFilterTime] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(true);
        if (!searchTerm.length) {
            setSuggestions(recentHistory.slice(0, 10));
        } else {
            setSuggestions([searchTerm])
        }
    }
    const searchTermChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm.length >= 2) {
            const newSuggestions = data
                .reduce((acc, item) => {
                    if (item.title.toLowerCase().includes(newSearchTerm.toLowerCase())) {
                        acc.push(item.title);
                    }
                    return acc;
                }, [])
                .slice(0, 10);
            setSuggestions(newSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const searchWordHelper = (word) => {
        const newRecentHistory = [word, ...recentHistory];
        localStorage.setItem('recentHistory', JSON.stringify(newRecentHistory));
        setRecentHistory(newRecentHistory);

        const searchResult = data
            .filter((item) => item.title.toLowerCase().includes(word.toLowerCase()));

        setResult(searchResult);
        setIsOpen(false);
    }

    const searchSubmit = (event) => {
        const startTime = performance.now();

        if (event.keyCode === 13 && searchTerm !== '') {
            searchWordHelper(searchTerm);
        }

        const endTime = performance.now();
        const timeDiff = endTime - startTime;
        setFilterTime(timeDiff);
    };

    const onItemClick = (listItem) => {
        searchWordHelper(listItem);
        setSearchTerm(listItem)
    };

    return {
        searchTerm,
        setSearchTerm,
        suggestions,
        setSuggestions,
        recentHistory,
        setRecentHistory,
        results,
        setResult,
        isOpen,
        setIsOpen,
        filterTime,
        setFilterTime,
        toggleDropdown,
        searchTermChange,
        searchSubmit,
        onItemClick,
    }
}

export default useSearch;