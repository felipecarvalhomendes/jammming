import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Tracklist from '../Tracklist/Tracklist'
import Track from '../Track/Track'

function App() {
  return (
    <div className="App">
      <h1>Jammming logo</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

// Additionally, make sure that your interface has a Save To Spotify button and a Search button.

export default App;
