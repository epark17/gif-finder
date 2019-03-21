import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';

// why are these not working?
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;
const API_KEY = 'TqGuGJDGgTUN67F8wqeBS0zTwMNDYVJO';

// want to try these in newer format and change methods to arrow functions so don't have to bind
class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      gifs: [], // this is data
      searchMessage: '',
      isSearching: true,
      isDataSorting: false,
      ratingType: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSortByDate = this.onSortByDate.bind(this);
    this.onClearFilter = this.onClearFilter.bind(this);
    this.onSortByRating = this.onSortByRating.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const searchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${
        this.state.query
      }&api_key=${API_KEY}&limit=20`; //15
      const { data } = await axios.get(searchEndpoint);

      this.setState({
        gifs: data.data,
        searchMessage: `Search results for "${this.state.query}"`,
        isSearching: false,
        isDataSorting: false,
        ratingType: null,
      });
    } catch (err) {
      console.error(err);
    }

    this.setState({ query: '' });
  }

  onSortByDate() {
    this.setState({ isDataSorting: !this.state.isDataSorting });
  }

  onClearFilter() {
    this.setState({ isDataSorting: false });
  }

  onSortByRating(ratingType) {
    this.setState({ ratingType });
  }

  render() {
    const {
      query,
      gifs,
      searchMessage,
      ratingType,
      isSearching,
      isDataSorting,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
        <SearchForm
          query={query}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {isSearching ? null : (
          <SearchResults
            gifs={gifs}
            searchMessage={searchMessage}
            isDataSorting={isDataSorting}
            ratingType={ratingType}
            onSortByDate={this.onSortByDate}
            onClearFilter={this.onClearFilter}
            onSortByRating={this.onSortByRating}
          />
        )}
      </div>
    );
  }
}

export default App;
