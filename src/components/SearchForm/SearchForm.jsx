import React from 'react';
import './SearchForm.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.initialSearchQuery || '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchQuery);
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'search-form' },
        React.createElement('input', {
          type: 'text',
          value: this.state.searchQuery,
          onChange: this.handleInputChange,
          onKeyPress: this.handleKeyPress,
        }),
        React.createElement(
          'button',
          { onClick: this.handleSearch },
          'Search'
        )
      )
    );
  }
}

export default SearchForm;
