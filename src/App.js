import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAll } from './BooksAPI'

import Book from './components/Book'
import Shelf from './components/Shelf'

import Button from '@material-ui/core/Button'

class App extends Component {

constructor() {
  super()
  this.state = {
    books: []
  }
}

componentDidMount() {
  getAll().then((books) => this.setState({ books }))
}

  render() {
    var shelves = ["Currently Reading", "Want To Read", "Read"]
    return (
      <div className="App">
      {
        shelves.map(shelf => (
            <Shelf books={this.state.books.filter(book => {
              return book.shelf === "read"
            })} label={shelf} />
        ))

      
      }

      </div>

    );
  }
}

export default App;
