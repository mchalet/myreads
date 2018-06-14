import React, { Component } from 'react'
import * as BooksAPI from "../BooksAPI";

class Search extends Component {
    state = {
        query: ''
    }
    handleInput = (event) => {
        var value = event.target.value
        this.setState({
            query: value
        })
    }

    render() {
        return(
            <input type="text" onChange={this.handleInput}/>
        )
    }
}

export default Search