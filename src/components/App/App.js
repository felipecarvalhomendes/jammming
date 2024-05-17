import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utilities/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null); // Store the currently playing audio element
  const [currentlyPlayingTrackId, setCurrentlyPlayingTrackId] = useState(null); // Store the ID of the currently playing track

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(
    (trackToRemove) => {
      setPlaylistTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackToRemove.id));
    },
    []
  );

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      alert('🎧 Playlist saved. Listen on your Spotify');
      setPlaylistName('');
      setPlaylistName('New Playlist');
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className='App'>
      <header>
        <h1>🎸Playlist Creator</h1>
      </header>
      <SearchBar onSearch={search} />
      <div className='resultsAndPlaylist'>
        <SearchResults
          searchResults={searchResults}
          onAdd={addTrack}
          currentlyPlayingAudio={currentlyPlayingAudio} // Pass the audio element
          setCurrentlyPlayingAudio={setCurrentlyPlayingAudio} // Pass the setter function
          currentlyPlayingTrackId={currentlyPlayingTrackId} // Pass the track ID
          setCurrentlyPlayingTrackId={setCurrentlyPlayingTrackId} // Pass the setter function
        />
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