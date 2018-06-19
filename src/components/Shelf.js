import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Book from "./Book";

var shelfStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 200px)",
  gridGap: "20px",
  justifyItems: "end"
};

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    handleUpdateBooks: PropTypes.func.notRequired
  };

  render() {
    let books = this.props.books;

    return (
      <div>
        <h1>{this.props.label}</h1>
        <div style={shelfStyle}>
          {books.map((book, index) => (
            <Book
              book={book}
              key={index}
              handleUpdateBooks={this.props.handleUpdateBooks}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
