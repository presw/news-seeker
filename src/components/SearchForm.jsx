import React from 'react';
import '../css/SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primarySearch: '',
      secondarySearch: '',
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    const { getSearchResults }= this.props;
    const { primarySearch, secondarySearch } = this.state;
    const q = secondarySearch ? `${primarySearch} AND ${secondarySearch}` : `${primarySearch}`;
    getSearchResults(q);
    e.preventDefault();
  }

  handleFieldChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const primaryPlaceHolder = 'Search for articles containing any of these terms.'
    const secondaryPlaceholder = 'Optional: Articles must also contain any of these terms.'
    return (
      <div className='search-form'>
        <form className='search-form' onSubmit={this.handleSearchSubmit}>
          <label>Search terms:</label>
          <input
            className='search-field'
            type='text' id='primarySearch'
            onChange={this.handleFieldChange}
            placeholder={primaryPlaceHolder}>
          </input>
          <label>Optional: Filter discovered articles by these terms:</label>
          <input
            className='search-field'
            type='text' id='secondarySearch'
            onChange={this.handleFieldChange}
            placeholder={secondaryPlaceholder}>
          </input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default SearchForm;
