import React, { Component } from 'react'

class Book extends Component {

    
    render() {
        var style = {
            background: 'red',
            height: '200px',
            width: '100px'
        }

        return(
            <div>
                <h2>Title</h2>
                <h3>Author</h3>
            </div>
        )
    }
}

export default Book