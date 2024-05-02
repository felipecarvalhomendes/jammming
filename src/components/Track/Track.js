import React from 'react';
import styles from './Track.module.css'

function Track() {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Song name 1</td>
                </tr>
                <tr>
                    <td>Artist 1</td>
                </tr>
                <tr>    
                    <td><button>Add</button></td>
                </tr>
                <tr>
                    <td colspan="3"><hr /></td> 
                </tr>
            </tbody>
        </table>
    );
}

export default Track;