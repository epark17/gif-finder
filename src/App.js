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
      gifs: [],
      message: '', // might not need, can use loader instead
      isLoading: true,
      // sortData: false, //
      // filterType: null, //
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  // getTrending might need another API_KEY because can't use it due to CORS prob
  async handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ message: 'Loading GIFs...' }); // might not need this, can use loader instead
    try {
      const http = 'https://api.giphy.com/v1/gifs/search?';
      // const query = 'q=funny+cat'; // hardcoded for testing
      const query = `q=${this.state.query}`;
      const key = `&api_key=${API_KEY}`;
      const limit = '&limit=20'; // default is 25 btw
      const searchEndpoint = http + query + key + limit;
      const { data } = await axios.get(searchEndpoint);

      console.log('data?', data.data);
      this.setState({
        gifs: data.data,
        message: `Search results for "${this.state.query}"`,
        isLoading: false,
        // sortData: false,
        // filterType: null
      });
    } catch (err) {
      console.error(err);
    }

    // this.setState({ query: '' });
  }

  render() {
    const { query, gifs, isLoading, message } = this.state;
    return (
      <div className="App">
        <h1 className="App-title">Giphy Search</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for Gifs..."
              value={query}
              onChange={this.handleChange}
            />
            <div className="input-group-btn">
              <button
                className="btn btn-primary"
                id="searchBtn"
                type="submit"
                disabled={!query}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {isLoading ? null : <SearchResult message={message} gifs={gifs} />}
      </div>
    );
  }
}

export default App;
