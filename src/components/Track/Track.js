import React from 'react';
import styles from './Track.module.css';

function Track(props) {
    const addTrack = () => {
        props.onAdd(props.track);
    }

    const removeTrack = () => {
        props.onRemove(props.track);
    }

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
            </div>
            {renderAction()}

        </div>
    );
}

export default Track;