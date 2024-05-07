import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.search(search);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={search}
                    onChange={handleChange}  
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;