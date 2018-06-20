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
        if (!!books && books.length) {
          const results = books.map(book => {
            const existingBook = this.props.bookMaster.find(
              addedBook => addedBook.id === book.id
            );
            book.shelf = !!existingBook ? existingBook.shelf : "none";
            return book;
          });
          books.length > 0
          ? this.setState({
              books: results
            })
          : this.setState({
              books: []
            });
        }
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
        {
          this.state.query.length > 0 && (
            <React.Fragment>
              <div>Sorry, no results</div>
              <p>Please try searching for one of these terms:</p>
              <p>
                'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
                'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
                'Brief', 'Business', 'Camus', 'Cervantes', 'Christie',
                'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai',
                'Design', 'Development', 'Digital Marketing', 'Drama',
                'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy',
                'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
                'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
                'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
                'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography',
                'Poetry', 'Production', 'Programming', 'React', 'Redux',
                'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
                'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
                'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web
                Development', 'iOS'
              </p>
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default Search;
