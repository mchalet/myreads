import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

import Book from "./Book";

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
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        {this.state.books.map(book => <Book book={book} />)}
      </div>
    );
  }
}

export default Search;
