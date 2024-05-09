import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const search = (event) => {
        event.preventDefault();
        props.onSearch(term);
    }

    return (
        <div className={styles.SearchBar}>

            <label>Song search: </label>
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