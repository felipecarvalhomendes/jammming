import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    }

    return (
      <div className={styles.Playlist}>

        <label>Playlist name:</label>
        <input 
            type='text' 
            value={props.playlistName}
            onChange={handleNameChange}
        />

        <Tracklist
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
        />

        <button onClick={props.onSave}>Save to Spotify</button>
      
      </div>
    );
  }
  
export default Playlist;