import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import Card from '@material-ui/core/Card'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }
    render() {
        var book = this.props.book

        return(
            <Card>
                <img src={book.imageLinks.thumbnail} height="200" width="130" alt=""/>
                <h2>{book.title}</h2>
                <h3>{book.shelf}</h3>
                <h3>{book.id}</h3>
                <button>Read</button>
            </Card>
        )
    }
}

export default Book