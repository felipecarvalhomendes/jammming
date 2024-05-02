import React from 'react';
import styles from './Playlist.module.css'
import Tracklist from '../Tracklist/Tracklist'

function Playlist() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <input type='text' placeholder='Playlist name' />
                    </tr>
                    <Tracklist />
                    <tr>
                        <td>
                            <button>Save to Spotify</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Playlist;