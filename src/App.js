import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';

const API_KEY = 'TqGuGJDGgTUN67F8wqeBS0zTwMNDYVJO';
class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      gifs: [],
      message: '',
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
      const query = `q=${this.state.query}`;
      const key = `&api_key=${API_KEY}`;
      const limit = '&limit=20'; // default is 25 btw
      const searchEndpoint = http + query + key + limit;
      const { data } = await axios.get(searchEndpoint);

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

    this.setState({ query: '' });
  }

  render() {
    const { query, gifs, message, isLoading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
        <SearchForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          query={query}
        />
        {/* null, need to replace that with something... */}
        {isLoading ? null : <SearchResults gifs={gifs} message={message} />}
      </div>
    );
  }
}

export default App;
