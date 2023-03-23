import { useRef, useEffect } from 'react';

const useSuggestions = (setSuggestions, recentHistory, setRecentHistory, setIsOpen) => {
  const dropdownRef = useRef(null);
    
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
    const isSearchedWord = (word) => recentHistory.includes(word);

    const removeWord = (event, word) => {
        event.stopPropagation();
        const newRecentHistory = recentHistory.filter((item) => item !== word);
        localStorage.setItem('recentHistory', JSON.stringify(newRecentHistory));
        setRecentHistory(newRecentHistory);
        setSuggestions(newRecentHistory);
    };

    return {
        isSearchedWord,
        removeWord,
        dropdownRef
    }
}

export default useSuggestions;