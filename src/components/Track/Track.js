import React, { useCallback, useState, useEffect } from 'react';
import styles from './Track.module.css';

function Track(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Only create an audio element if the preview_url is valid
    if (props.track.preview_url) {
      const newAudio = new Audio(props.track.preview_url);
      setAudio(newAudio);

      const handleAudioEnd = () => setIsPlaying(false);
      newAudio.addEventListener('ended', handleAudioEnd);

      return () => {
        newAudio.removeEventListener('ended', handleAudioEnd);
        newAudio.pause();
      };
    }
  }, [props.track.preview_url]);

  useEffect(() => {
    if (props.currentlyPlayingTrackId !== props.track.id) {
      setIsPlaying(false);
    }
  }, [props.currentlyPlayingTrackId, props.track.id]);

  const toggleSample = useCallback(() => {
    if (!audio) return; // Return early if audio is not available

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      if (props.currentlyPlayingAudio === audio) {
        props.setCurrentlyPlayingAudio(null);
        props.setCurrentlyPlayingTrackId(null);
      }
    } else {
      if (props.currentlyPlayingAudio && props.currentlyPlayingAudio !== audio) {
        props.currentlyPlayingAudio.pause();
      }

      audio.play();
      props.setCurrentlyPlayingAudio(audio);
      props.setCurrentlyPlayingTrackId(props.track.id);
      setIsPlaying(true);
    }
  }, [isPlaying, audio, props]);

  const renderAction = () => {
    if (props.isRemoval) {
      return <button onClick={removeTrack}>-</button>;
    }

    return <button onClick={addTrack}>+</button>;
  };

  const addTrack = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track]);

  const removeTrack = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track]);

  return (
    <div className={styles.track}>
      <div className={styles.trackInfo}>
        <h3>{props.track.name}</h3>
        <h4>{props.track.artist} | {props.track.album}</h4>
      </div>
      <div className={styles.buttons}>
        {props.track.preview_url && (
          <button className={styles.playSampleButton} onClick={toggleSample}>
            {isPlaying ? (
              <i className={`fa-solid fa-circle-pause fa-2xl ${styles.pauseSampleIcon}`}></i>
            ) : (
              <i className={`fa-solid fa-circle-play fa-2xl ${styles.playSampleIcon}`}></i>
            )}
          </button>
        )}
        {renderAction()}
      </div>
    </div>
  );
}

export default Track;