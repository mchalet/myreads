import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = {
  card: {
    width: 200
  },
  media: {
    height: 300,
    paddingTop: "56.25%"
  },
  nomedia: {
    height: 300,
    display: 'flex',
    'justify-content': 'center', 
    'align-items': 'center',
  },
  content: {
    height: 125
  },
  form: {
    margin: "0 auto",
    width: "80%"
  }
};

class Book extends Component {
  state = {
    book: this.props.book
  };

  handleChangeShelf = e => {
    var newShelf = e.target.value;
    this.props.book.shelf = newShelf;
    this.setState({
      book: this.props.book
    });
    this.props.handleUpdateBooks(this.props.book, e.target.value);
  };

  render() {
    const { classes } = this.props;
    var book = this.props.book;

    return (
      <Card className={classes.card}>
        {!!book.imageLinks ? (
          <CardMedia
            className={classes.media}
            image={book.imageLinks.thumbnail}
          />
        ) : (
          <div className={classes.nomedia}>
            <Typography variant="body2">No Image</Typography>
          </div>
        )}
        <CardContent className={classes.content}>
          <Typography variant="body2">{book.title}</Typography>

          {!!book.authors &&
            book.authors.map(author => (
              <Typography variant="body1" key={author}>
                {author}
              </Typography>
            ))}
        </CardContent>
        <CardActions>
          <form className={classes.form} autoComplete="off">
            <FormControl>
              <Select
                className={classes.select}
                value={book.shelf}
                onChange={this.handleChangeShelf}
              >
                <MenuItem value="currentlyReading">Currently Reading</MenuItem>
                <MenuItem value="wantToRead">Want to Read</MenuItem>
                <MenuItem value="read">Read</MenuItem>
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
          </form>
        </CardActions>
      </Card>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateBooks: PropTypes.func
};

export default withStyles(styles)(Book);
