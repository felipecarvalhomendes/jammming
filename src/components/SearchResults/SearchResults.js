import React from 'react';
import styles from './SearchResults.module.css'

function SearchResults() {
    return (
        <div>
            <h2>Results</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Song name 1</td>
                        <td>Artist 1</td>
                        <td>
                            <button>Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr /></td> 
                    </tr>
                    <tr>
                        <td>Song name 2</td>
                        <td>Artist 2</td>
                        <td>
                            <button>Add</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr /></td> 
                    </tr>
                    <tr>
                        <td>Song name 3</td>
                        <td>Artist 3</td>
                        <td>
                            <button>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default SearchResults;