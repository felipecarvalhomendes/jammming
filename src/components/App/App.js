import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utilities/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  }  

  const addTrack = (track) => {
    if (!playlistTracks.some(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeTrack = (trackToRemove) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id !== trackToRemove.id));
  } 

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }
  
  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      alert('🎧 Playlist saved. Listen on your Spotify');
      setPlaylistName('');
      setPlaylistTracks([]);
    });
  }

  return (
    <div className='App'>

      <header>
        <h1>🎸Playlist Creator</h1>
      </header>

      <SearchBar onSearch={search} />

      <div className='resultsAndPlaylist'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        
        <Playlist
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </div>

    </div>
  );
}

export default App;