import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import update from "immutability-helper";

import Book from "./components/Book";
import Shelf from "./components/Shelf";
import Search from "./components/Search"

import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      books: []
    };
  }

  componentWillMount() {
    this.handleGetBooks();
  }

  handleGetBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  handleUpdateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.handleGetBooks())
  }

  render() {
    var style = {
      margin: "50px"
    };
    // var shelves = ["Currently Reading", "Want To Read", "Read"]
    return (
      <div className="App" style={style}>
        {/*
        shelves.map(shelf => (
            <Shelf books={this.state.books.filter(book => {
              return book.shelf === "read"
            })} label={shelf} />
        ))
      */}
        <Shelf
          books={this.state.books.filter(book => {
            return book.shelf === "currentlyReading";
          })}
          label={"Currently Reading"}
          handleUpdateBooks={this.handleUpdateBooks}
        />
        <Shelf
          books={this.state.books.filter(book => {
            return book.shelf === "wantToRead";
          })}
          label={"Want To Read"}
          handleUpdateBooks={this.handleUpdateBooks}
        />
        <Shelf
          books={this.state.books.filter(book => {
            return book.shelf === "read";
          })}
          label={"Read"}
          handleUpdateBooks={this.handleUpdateBooks}
        />
        <Search />
      </div>
    );
  }
}

export default App;
