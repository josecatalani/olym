import React from 'react';
import './App.css';
import { Listing } from './Listing';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Listing />
    </div>
  );
}

export default App;
