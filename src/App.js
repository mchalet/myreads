import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
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
    var style = {
      margin: "0 20px 0 20px"
    };
    return (
      <React.Fragment>
      <CssBaseline/>
      <div className="App">
        <Header />
        <div className="header-container" style={style}>
          <Route
            path="/search"
            render={() => <Search bookMaster={this.state.books} handleUpdateBooks={this.handleUpdateBooks} />}
          />
          <Route
            exact
            path="/"
            render={() => (
              <BookShelf bookMaster={this.state.books} />
            )}
          />
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
