import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import Shelf from "./components/Shelf";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [],
      query: ""
    };
  }

  componentWillMount() {
    this.handleGetBooks();
  }

  handleGetBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  handleUpdateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.handleGetBooks());
  };

  render() {
    var style = {
      margin: "50px"
    };
    return (
      <div className="App" style={style}>
        <Route
          path="/search"
          render={() => <Search bookMaster={this.state.books} handleUpdateBooks={this.handleUpdateBooks} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Link to="/search">Search</Link>
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
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default App;
