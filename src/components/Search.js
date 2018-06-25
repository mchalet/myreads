import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import * as BooksAPI from "../BooksAPI";
import Typography from "@material-ui/core/Typography";
import Shelf from "./Shelf";
import TextField from "@material-ui/core/TextField";

const styles = {
  error: {
    "text-align": "center"
  },
  search: {
    textAlign: "center"
  }
};

class Search extends Component {
  state = {
    books: [],
    query: "",
    results: true
  };

  handleInputChange = event => {
    const value = event.target.value;
    value.length === 0
      ? this.setState({ query: "", books: [] })
      : this.setState({ query: value });
    this.handleSearch(value);
  };
  // Query API for books. 
  handleSearch = query => {
    query.length !== 0 &&
      BooksAPI.search(query).then(books => {
        books.error && this.setState({books: []});
        if (!!books && books.length) {
          const results = books.map(book => {
            const existingBook = this.props.bookMaster.find(
              addedBook => addedBook.id === book.id
            );
            book.shelf = !!existingBook ? existingBook.shelf : "none";
            return book;
          });
          results.length > 0 
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
    const { classes } = this.props;
    return (
      <div>
        <TextField
          type="text"
          className={classes.search}
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder="Search"
          fullWidth
        />
        <Shelf
          books={this.state.books}
          handleUpdateBooks={this.props.handleUpdateBooks}
        />
        {/*Dynamically render error message*/
        this.state.books.length === 0 &&
          !!this.state.query && (
            <div className={classes.error}>
              <Typography variant="title">Sorry, no results!</Typography>
              <Typography variant="subheading">
                Please try searching for one of these terms:
              </Typography>
              <Typography>
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
              </Typography>
            </div>
          )}
      </div>
    );
  }
}

Search.propTypes = {
  bookMaster: PropTypes.array.isRequired,
  handleUpdateBooks: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);
