import React, { useState, useCallback } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback((event) => {
        event.preventDefault();
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className={styles.SearchBar}>

            <label>Song title: </label>
            <input 
                type='text' 
                value={term}
                onChange={handleTermChange}  
            />

            <button onClick={search}>
                Search
            </button>

        </div>
    );
}

export default SearchBar;