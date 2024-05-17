import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Songs found</h2>
      <p>Click on the plus button to add a song to your custom playlist:</p>
      <Tracklist
        tracks={props.searchResults}
        onAdd={props.onAdd}
        currentlyPlayingAudio={props.currentlyPlayingAudio} // Pass the audio element
        setCurrentlyPlayingAudio={props.setCurrentlyPlayingAudio} // Pass the setter function
        currentlyPlayingTrackId={props.currentlyPlayingTrackId} // Pass the track ID
        setCurrentlyPlayingTrackId={props.setCurrentlyPlayingTrackId} // Pass the setter function
      />
    </div>
  );
};

export default SearchResults;