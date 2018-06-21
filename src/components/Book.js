import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = {
  card: {
    width: 200,
    height: 350,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
  media: {
    height: 140,
    width: "100%",
  },
};

class Book extends Component {
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
    const { classes } = this.props;
    var book = this.props.book;

    return (
      <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={book.imageLinks.thumbnail}
          />
          <CardContent>
          <Typography variant="title">{book.title}</Typography>
          {
            
            book.authors.map(author => (
              <Typography variant="subheading" key={author}>{author}</Typography>
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
          </CardContent>
      </Card>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateBooks: PropTypes.func,
};

export default withStyles(styles)(Book);
