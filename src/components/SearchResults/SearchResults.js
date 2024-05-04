import React, { useState } from 'react';
import styles from './SearchResults.module.css'

function SearchResults({ tracks, onAdd }) {
    return (
      <div>
        <h2>Results</h2>
        {tracks.map(track => (
          <div key={track.id}>
            <p>{track.songName}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={() => onAdd(track)}>Add to Playlist</button>
          </div>
        ))}
      </div>
    );
  }  

export default SearchResults;