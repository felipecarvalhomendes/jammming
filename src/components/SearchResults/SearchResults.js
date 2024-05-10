import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {
    return (
      <div className={styles.SearchResults}>

        <h2>Songs found</h2>
        <p>Click on the plus button to add a song to your custom playlist:</p>
        
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
      
      </div>
    );
  };
  
  export default SearchResults;  