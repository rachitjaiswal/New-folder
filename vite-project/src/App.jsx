import React from 'react';
import './App.css';
import Sidebar from './SideBar';
import MainContent from './MainContent';
import ArtistList from './ArtistList';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
      <ArtistList />
    </div>
  );
}

export default App;
