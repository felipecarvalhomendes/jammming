import React from 'react';
import styles from './Playlist.module.css'

function Playlist({ tracks, removeTrackFromPlaylist }) {
    return (
      <div>
        <input type='text' placeholder='Playlist name' />
        {tracks.map(track => (
          <div key={track.id}>
            <p>{track.songName}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={() => removeTrackFromPlaylist(track)}>Remove from playlist</button>
          </div>
        ))}
        <button>Save to Spotify</button>
      </div>
    );
  }
  
export default Playlist;