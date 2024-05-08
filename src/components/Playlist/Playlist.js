import React, { useState } from 'react';
import styles from './Playlist.module.css'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const handleNameChange = (event) => {
        props.onNameChange(event.targe.value);
    }

    return (
      <div className='Playlist'>

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