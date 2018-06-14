import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAll } from './BooksAPI'
import update from 'immutability-helper';

import Book from './components/Book'
import Shelf from './components/Shelf'

import Button from '@material-ui/core/Button'

class App extends Component {

constructor(props) {
  super()
  this.state = {
    books: []
  }

  this.handleClick = this.handleClick.bind(this)
}

componentWillMount() {
  getAll().then((books) => this.setState({ books }))
}

handleClick = (e) => {
  var elementPos = this.state.books.map(x => {return x.id; }).indexOf(e.target.name.id)
  console.log(e)
  this.setState({
    books: update(this.state.books, {[elementPos]: {shelf: {$set: 'read'}}})
  })
}

  render() {
    var style = {
      margin: "50px"
    }
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
          return book.shelf === "currentlyReading"
        })} 
        label={"Currently Reading"} 
        click={this.handleClick}
      />
      <Shelf 
        books={this.state.books.filter(book => {
          return book.shelf === "wantToRead"
        })} 
        label={"Want To Read"} 
      />
      <Shelf 
        books={this.state.books.filter(book => {
          return book.shelf === "read"
        })} 
        label={"Read"} 
      />


      </div>

    );
  }
}

export default App;
