import React, { Component } from 'react'

import Card from '@material-ui/core/Card'

class Book extends Component {

    
    render() {
        var book = this.props.book

        return(
            <Card>
                <img src={book.imageLinks.thumbnail} height="200" width="130" alt=""/>
                <h2>{book.title}</h2>
                <h3>{book.shelf}</h3>
                <h3>{book.id}</h3>
                <button onClick={this.props.click}>Read</button>
            </Card>
        )
    }
}

export default Book