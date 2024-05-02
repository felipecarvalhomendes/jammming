import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Tracklist from '../Tracklist/Tracklist'
import Track from '../Track/Track'

function App() {
  const tracks = [
    {
      songName: 'Beautiful Day',
      artist: 'U2',
      album: 'No idea',
      id: 12345
    },
    {
      songName: 'Beautiful Day',
      artist: 'U2',
      album: 'No idea',
      id: 12345
    },
    {
      songName: 'Beautiful Day',
      artist: 'U2',
      album: 'No idea',
      id: 12345
    }
  ];
    
  return (
    <div className="App">
      <h1>Jammming logo</h1>
      <SearchBar />
      <SearchResults tracks={tracks} />
      <Playlist />
    </div>
  );
}

export default App;