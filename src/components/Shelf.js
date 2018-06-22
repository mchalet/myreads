import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Book from "./Book";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Shelf extends Component {
  render() {
    const { classes } = this.props;
    let books = this.props.books;

    return (
      <React.Fragment>
        <Typography variant="display2">{this.props.label}</Typography>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              {books.map((book, index) => (
                <Grid item key={book.id}>
                  <Book
                    book={book}
                    key={index}
                    handleUpdateBooks={this.props.handleUpdateBooks}
                    bookMaster={this.props.bookMaster}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  handleUpdateBooks: PropTypes.func
};

export default withStyles(styles)(Shelf);
