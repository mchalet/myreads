import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Card from "@material-ui/core/Card";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

var cardStyle = {
  margin: "20px",
};

var authorStyle = {
  margin: 5
}

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateBooks: PropTypes.func.isRequired
  };

  state = {
    book: this.props.book
  }

  handleChangeShelf = e => {
    var newShelf = e.target.value;
    this.props.book.shelf = newShelf;
    this.setState({
      book: this.props.book
    })
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
          {
            
            book.authors.map(author => (
              <h4 style={authorStyle}>{author}</h4>
            ))
          }
          <form autoComplete="off">
            <FormControl>
              <Select
                value={book.shelf}
                onChange={this.handleChangeShelf}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="currentlyReading">Currently Reading</MenuItem>
                <MenuItem value="wantToRead">Want to Read</MenuItem>
                <MenuItem value="read">Read</MenuItem>
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
      </Card>
    );
  }
}

export default Book;
