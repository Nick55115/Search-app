import { useEffect, useRef } from "react";

const useSearchBar = (setRecentHistory) => {
    const inputRef = useRef(null);

    useEffect(() => {
        const storedRecentHistory = JSON.parse(localStorage.getItem('recentHistory')) || [];
        setRecentHistory(storedRecentHistory);
        inputRef.current.focus();
    }, []);

    return {
        inputRef
    }
}

export default useSearchBar;