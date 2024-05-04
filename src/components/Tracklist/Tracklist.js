import React from 'react';
import styles from './Tracklist.module.css'
import SearchResults from '../SearchResults/SearchResults';

function Tracklist(props) {
    const tracksAddedToPlaylist = [props];

    {tracksAddedToPlaylist.map(track => {
        return (
        <div>
            <p>{track.songName}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
        </div>
        );
    })}
}

export default Tracklist;