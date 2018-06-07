import React, { Component } from 'react'

class Book extends Component {

    
    render() {
        var style = {
            background: 'red',
            height: '200px',
            width: '100px'
        }

        var book = this.props.book

        return(
            <div>
                <img src={book.imageLinks.thumbnail} alt=""/>
                <h2>{book.title}</h2>
                <h3>{book.shelf}</h3>
            </div>
        )
    }
}

export default Book