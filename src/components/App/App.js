import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utilities/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  }

  const [tracks, setTracks] = useState([]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackToRemove) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackToRemove.id));
  } 
  
  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(tracks.name, trackUris).then(setPlaylistTracks([]));
  }

  return (
    <div className="App">
      <h1>Jammming logo</h1>
      <SearchBar search={search} />
      <SearchResults tracks={tracks} onAdd={addTrackToPlaylist} />
      <Playlist 
        tracks={playlistTracks} 
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        savePlaylist={savePlaylist} 
      />
    </div>
  );
}

export default App;