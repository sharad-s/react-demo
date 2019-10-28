import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  onFormChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('starting');
    this.props
      .onFormSubmit(this.state.value)
      .then(() => {
        this.setState({ value: '' });
      })
      .catch(() => alert("Didn't work"));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Search Youtube</label>
            <input type="text" value={value} onChange={this.onFormChange} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
