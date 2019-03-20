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
      searchMessage: '',
      isLoading: true,
      dataSort: false,
      ratingType: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSortByDate = this.onSortByDate.bind(this);
    // this.onFilterByRatings = this.onFilterByRatings.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const searchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${
        this.state.query
      }&api_key=${API_KEY}&limit=6`; //18
      const { data } = await axios.get(searchEndpoint);

      this.setState({
        gifs: data.data,
        searchMessage: `Search results for "${this.state.query}"`,
        isLoading: false,
        dataSort: false,
        // ratingType: null,
      });
    } catch (err) {
      console.error(err);
    }
    this.setState({ query: '' });
  }

  onSortByDate() {
    this.setState({ dataSort: true });
  }

  // onFilterByRatings(type) {
  //   this.setState({ ratingType: true });
  // }

  render() {
    const {
      query,
      gifs,
      searchMessage,
      isLoading,
      dataSort,
      // ratingType,
    } = this.state;
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
        {isLoading ? null : (
          <SearchResults
            gifs={gifs}
            searchMessage={searchMessage}
            dataSort={dataSort}
            onSortByDate={this.onSortByDate}
            // ratingType={ratingType}
            // onFilterByRatings={this.onFilterByRatings}
          />
        )}
      </div>
    );
  }
}

export default App;
