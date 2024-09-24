import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Playlists from './components/Playlists';
import SongsDataGrid from './components/SongsDataGrid';
import PlaylistPage from './components/PlaylistPage';
import "./App.css"
import StirThePot from './components/extraStuff/stirthepot';
import EnterQuestions from './components/extraStuff/EnterQuestions';
import ManageDecks from './components/extraStuff/ManageDecks';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
