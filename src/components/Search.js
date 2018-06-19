import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

import Shelf from "./Shelf";
import TextField from '@material-ui/core/TextField'

class Search extends Component {
  state = {
    books: [],
    query: ""
  };
  handleInputChange = event => {
    var value = event.target.value;
    this.setState({ query: value });
    this.handleSearch(value);
  };
  handleSearch = query => {
    BooksAPI.search(query).then(books => {
      this.setState({
        books: books
      });
    });
  };

  render() {
    return (
      <div>
        <TextField
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange} 
          placeholder="Search"
          fullWidth />
        <Shelf books={this.state.books} handleUpdateBooks={this.props.handleUpdateBooks} />
      </div>
    );
  }
}

export default Search;
