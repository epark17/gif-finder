import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import SearchResults from './components/results/SearchResults';
import SearchForm from './components/results/SearchForm';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;

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
    this.onSortByRating = this.onSortByRating.bind(this);
    this.onClearFilter = this.onClearFilter.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const searchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${API_KEY}&limit=20`; //15
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
    this.setState({ isDataSorting: true, ratingType: null });
  }

  onSortByRating(ratingType) {
    this.setState({ isDataSorting: false, ratingType });
  }

  onClearFilter() {
    this.setState({ isDataSorting: false, ratingType: null });
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
            onSortByRating={this.onSortByRating}
            onClearFilter={this.onClearFilter}
          />
        )}
      </div>
    );
  }
}

export default App;
