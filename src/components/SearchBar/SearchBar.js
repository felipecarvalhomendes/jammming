import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <div>
            <form>
                <input type='text' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;