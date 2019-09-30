import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchResults from './components/results/SearchResults';
import SearchForm from './components/results/SearchForm';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;

class App extends Component {
  state = {
    query: '',
    gifs: [], // this is data
    searchMessage: '',
    isSearching: true,
    isDataSorting: false,
    ratingType: null,
  };

  handleChange = e => {
    this.setState({ query: e.target.value }); // only query needed
  };

  handleSubmit = async e => {
    e.preventDefault();
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

    this.setState({ query: '' }); // clear input after search
  };

  onSortByDate = () => {
    this.setState({ isDataSorting: true, ratingType: null });
  };

  onSortByRating = ratingType => {
    this.setState({ isDataSorting: false, ratingType });
  };

  onClearFilter = () => {
    this.setState({ isDataSorting: false, ratingType: null });
  };

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
      <div className="container">
        <div className="card card-body mb-4 p-4">
          <h1 className="title display-4 text-center">
            <i className="fas fa-smile-wink"></i> GIF Finder
          </h1>
          <p className="lead text-center">Get your favorite GIF</p>
          <SearchForm
            query={query}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </div>

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
