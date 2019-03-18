import React, { Component } from 'react';
import './App.css';

import SearchResult from './components/SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Giphy Search</h1>
        <SearchResult />
      </div>
    );
  }
}

export default App;
