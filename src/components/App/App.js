import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [tracks, setTracks] = useState([
    { songName: 'Beautiful Day', artist: 'U2', album: 'No idea', id: 12345 },
    { songName: 'Fio de cabelo', artist: 'Chitãozinho e Chororó', album: 'No idea', id: 290487 },
    { songName: 'Teto de vidro', artist: 'Pitty', album: 'Teto de vidro', id: 98765 }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (trackToRemove) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackToRemove.id));
  }  

  return (
    <div className="App">
      <h1>Jammming logo</h1>
      <SearchBar />
      <SearchResults tracks={tracks} onAdd={addTrackToPlaylist} />
      <Playlist tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />
    </div>
  );
}

export default App;