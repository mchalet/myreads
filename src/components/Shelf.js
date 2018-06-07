import React, { Component } from 'react'
import { getAll } from '../BooksAPI'

import Book from './Book'

class Shelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
        console.log(this.state.books)
    }

    componentDidMount() {
        getAll().then((books) => this.setState({ books }))
    }


    render() {

        let books = this.state.books

        return(
            <div>
                <div>
                    {
                        books.map(book => (
                            <div key={book.title}>
                                <img src={book.imageLinks.thumbnail} alt=""/>
                                <h2>{book.title}</h2>
                                <h3>{book.subtitle}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Shelf