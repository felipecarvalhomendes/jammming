import React, { useState } from 'react';
import styles from './Playlist.module.css'

function Playlist({ tracks, removeTrackFromPlaylist, resetPlaylist }) {
    const [playlistTitle, setPlaylistTitle] = useState('');

    const handleChange = (event) => {
        setPlaylistTitle(event.target.value);
    }

    return (
      <div>
        <label htmlFor="playlistTitleInput">Playlist title: </label>
        <input 
            id="playlistTitleInput"
            type='text' 
            value={playlistTitle}
            onChange={handleChange}
        />
        {tracks.map(track => (
          <div key={track.id}>
            <p>{track.songName}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={() => removeTrackFromPlaylist(track)}>Remove from playlist</button>
          </div>
        ))}
        <button onClick={() => resetPlaylist()}>Save to Spotify</button>
      </div>
    );
  }
  
export default Playlist;