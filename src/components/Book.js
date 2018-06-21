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
    width: 220,
    height: 450,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
  media: {
    height: '100%',
    width: '100%',
  },
  content: {
    height: "50%",
    display: 'flex',
    'flex-direction': 'column',
    'margin-bottom': 8,
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
          <CardContent className={classes.content}>
          <Typography variant="body1">{book.title}</Typography>
          <div>
            {
              
              book.authors.map(author => (
                <Typography variant="body2" key={author}>{author}</Typography>
              ))
            }
          </div>
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
