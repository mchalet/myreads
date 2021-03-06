import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./components/Header";
import BookShelf from "./components/BookShelf";
import Search from "./components/Search";

class App extends Component {
  constructor() {
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
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Route
          path="/search"
          render={() => (
            <Search
              bookMaster={this.state.books}
              handleUpdateBooks={this.handleUpdateBooks}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              bookMaster={this.state.books}
              handleUpdateBooks={this.handleUpdateBooks}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
