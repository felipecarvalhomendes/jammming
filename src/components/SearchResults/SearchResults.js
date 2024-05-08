import React, { useState } from 'react';
import styles from './SearchResults.module.css'
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
      </div>
    );
  };
  
  export default SearchResults;  