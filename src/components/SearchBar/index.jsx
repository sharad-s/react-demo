import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        value: ''
    }

    onFormChange = e => {
        e.preventDefault()
        this.setState({value: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        console.log("Submitted:", this.state.value)
        this.setState({value: ''})

    }

    render() {
        const { value } = this.state

        return (
            <div>
                <h1>SearchBar</h1> 
                <form onSubmit={this.onSubmit}> 
                    <input type="text" value={value} onChange={this.onFormChange} />
                    <br />
                    <input type="submit" value="Submit Baby" />
                </form> 
            </div>
        )
    }
}
