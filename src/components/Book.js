import React, { Component } from 'react'

import Card from '@material-ui/core/Card'

class Book extends Component {

    
    render() {
        var style = {
            background: 'red',
            height: '200px',
            width: '100px'
        }

        var book = this.props.book

        return(
            <Card>
                <img src={book.imageLinks.thumbnail} alt=""/>
                <h2>{book.title}</h2>
                <h3>{book.shelf}</h3>
            </Card>
        )
    }
}

export default Book