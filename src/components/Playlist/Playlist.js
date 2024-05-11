import React, { useCallback } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return (
        <div className={styles.Playlist}>

            <h2>Your custom playlist</h2>
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

            <button className={styles.saveButton} onClick={props.onSave}>Save to Spotify</button>
      
        </div>
    );
  }
  
export default Playlist;