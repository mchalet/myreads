import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'

import Shelf from './Shelf';


class BookShelf extends Component {
    render() {
        return (
            <React.Fragment>
            <Link to="/search">
            <Typography variant="button">Search</Typography>
            </Link>
            <Shelf
              books={this.props.bookMaster.filter(book => {
                return book.shelf === "currentlyReading";
              })}
              label={"Currently Reading"}
              handleUpdateBooks={this.handleUpdateBooks}
            />
            <Shelf
              books={this.props.bookMaster.filter(book => {
                return book.shelf === "wantToRead";
              })}
              label={"Want To Read"}
              handleUpdateBooks={this.handleUpdateBooks}
            />
            <Shelf
              books={this.props.bookMaster.filter(book => {
                return book.shelf === "read";
              })}
              label={"Read"}
              handleUpdateBooks={this.handleUpdateBooks}
            />
          </React.Fragment>
        )
    }
}

export default BookShelf;