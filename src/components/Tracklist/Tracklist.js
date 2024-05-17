import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist(props) {
  return (
    <div className='Tracklist'>
      {props.tracks.map(track => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
            currentlyPlayingAudio={props.currentlyPlayingAudio} // Pass the audio element
            setCurrentlyPlayingAudio={props.setCurrentlyPlayingAudio} // Pass the setter function
            currentlyPlayingTrackId={props.currentlyPlayingTrackId} // Pass the track ID
            setCurrentlyPlayingTrackId={props.setCurrentlyPlayingTrackId} // Pass the setter function
          />
        );
      })}
    </div>
  );
}

export default Tracklist;