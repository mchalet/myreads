import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import TextField from "@material-ui/core/TextField";

class Search extends Component {
  state = {
    books: [],
    query: ""
  };
  handleInputChange = event => {
    var value = event.target.value;
    value.length === 0
      ? this.setState({ query: "", books: [] })
      : this.setState({ query: value });
    this.handleSearch(value);
  };
  handleSearch = query => {
    query.length != 0 &&
      BooksAPI.search(query).then(books => {
        const results = books.map(book => {
          const existingBook = this.props.bookMaster.find(
            addedBook => addedBook.id === book.id
          );
          book.shelf = !!existingBook ? existingBook.shelf : "none";
          return book;
        });

        books.length > 0
          ? this.setState({
              books: books
            })
          : this.setState({
              books: []
            });
      });
  };

  render() {
    return (
      <div>
        <Link to="/">Back to Shelves</Link>
        <TextField
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder="Search"
          fullWidth
        />
        <Shelf
          books={this.state.books}
          handleUpdateBooks={this.props.handleUpdateBooks}
        />
        {this.state.books.length === 0 &&
          this.state.query.length > 0 && <div>Sorry, no results</div>}
      </div>
    );
  }
}

export default Search;
