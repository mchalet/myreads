import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Shelf from "./Shelf";

class BookShelf extends Component {
  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }
    return (
      <React.Fragment>
      { Object.keys(shelves).map((shelf) =>
        <div key={shelf}>
          <Shelf 
            books={this.props.bookMaster.filter(book => {
              return book.shelf === shelves[shelf][1];
            })}
            label={shelves[shelf][0]}
            handleUpdateBooks={this.props.handleUpdateBooks}
          />
          <hr />
        </div>
      )}
      </React.Fragment>
    );
  }
}

BookShelf.propTypes = {
  bookMaster: PropTypes.array.isRequired,
  handleUpdateBooks: PropTypes.func.isRequired
};

export default BookShelf;
