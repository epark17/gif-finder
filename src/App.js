import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchResult from './components/SearchResult';
// import SearchForm from './components/SearchForm';

const API_KEY = 'TqGuGJDGgTUN67F8wqeBS0zTwMNDYVJO';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      // message: '', // might not need
      // onLoad: true, //
      // sortData: false, //
      // filterType: null, //
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getTrending might need another API_KEY because can't use it do to CORS prob
  async handleSubmit(evt) {
    try {
      const http = 'https://api.giphy.com/v1/gifs/search?';
      const query = 'q=funny+cat'; // hardcoded for testing
      // `q=${this.state.query}`;
      const key = `&api_key=${API_KEY}`;
      const limit = '&limit=20'; // default is 25 btw
      const searchEndpoint = http + query + key + limit;
      const { data } = await axios.get(searchEndpoint);

      console.log('working!', data.data);
    } catch (err) {
      console.error(err);
    }
  }

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
        <SearchResult />
      </div>
    );
  }
}

export default App;
