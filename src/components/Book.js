import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Card from "@material-ui/core/Card";

var cardStyle = {
  margin: "20px"
};

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateBooks: PropTypes.func.isRequired
  };

  handleChangeShelf = e => {
    this.props.handleUpdateBooks(this.props.book, e.target.value);
  };
  render() {
    var book = this.props.book;

    return (
      <Card>
        <div style={cardStyle}>
          <img
            src={book.imageLinks.thumbnail}
            height="200"
            width="130"
            alt=""
          />
          <h2>{book.title}</h2>
          <select onChange={this.handleChangeShelf} value={book.shelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </Card>
    );
  }
}

export default Book;
