import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <CountryList/>
    </div>
  );
}

export default App;
