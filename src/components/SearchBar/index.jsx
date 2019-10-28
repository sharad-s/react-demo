import React, { Component } from 'react';

// CSS
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  // For Controlled Form Component
  onFormChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  // Triggered on Form Submit
  onSubmit = async e => {
    e.preventDefault();
    await this.props.onFormSubmit(this.state.value);

    // Empty Form value
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="searchbar-field field">

            {/* Label */}
            <label className="searchbar-label">
              <i className="fab fa-youtube fa-2x" style={{ margin: '5px' }} />
              Search Youtube
            </label>

            {/* Form */}
            <div className="searchbar-form">
              <input
                type="text"
                placeholder="Search"
                className="searchbar-input"
                value={value}
                onChange={this.onFormChange}
              />
              <button className="searchbar-submit ui button" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
