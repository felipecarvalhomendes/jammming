import React from 'react';
import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist'

function SearchResults(props) {
    const { tracks } = props;

    return (
        <div>
            <h2>Results</h2>
            {tracks.map(track => {
                return (
                    <div key={track.id}>
                        <p>{track.songName}</p>
                        <p>{track.artist}</p>
                        <p>{track.album}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResults;