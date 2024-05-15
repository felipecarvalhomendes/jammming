import React, { useCallback, useState } from 'react';
import styles from './Track.module.css';

function Track(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = new Audio(props.track.preview_url);

    const addTrack = useCallback(() => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback(() => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    const toggleSample = useCallback(() => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying, audio]);

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button onClick={removeTrack}>
                    -
                </button>
            );
        }

        return (
            <button onClick={addTrack}>
                +
            </button>
        );
    }

    return (
        <div className={styles.track}>

            <div className={styles.trackInfo}>
                <h3>{props.track.name}</h3>
                <h4>{props.track.artist} | {props.track.album}</h4>
                {props.track.preview_url && (
                    <button onClick={toggleSample}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                )}
            </div>
            {renderAction()}

        </div>
    );
}

export default Track;