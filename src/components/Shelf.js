import React, { Component } from 'react'

import Book from './Book'

class Shelf extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let books = this.props.books

        var style = {
            display: "grid",
            gridTemplateColumns: "200px 200px 200px",
            gridGap: "20px"
        }

        return(
            <div>
                <h1>{this.props.label}</h1>
                <div style={style}>
                    {
                        books.map(book => (
                            <div key={book.title}>
                                <Book book={book} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Shelf