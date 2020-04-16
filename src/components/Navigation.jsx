import React from 'react';
import SearchForm from './SearchForm';
import '../css/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'topHeadlines',
    };
    this.tabClickHandler = this.tabClickHandler.bind(this);
  }

  tabClickHandler(e) {
    const selected = e.target.id;
    this.setState({ selected });
    selected === 'topHeadlines' ? this.props.getTopHeadlines() : undefined;
  }

  render() {
    const { articles, getSearchResults } = this.props;
    const { selected } = this.state;
    const searchIsSelected = selected === 'search';
    return (
      <div>
        <div className='navigation-bar'>
          <div className={`navigation-tab ${selected === 'topHeadlines' ? 'active' : ''}`} id='topHeadlines' onClick={this.tabClickHandler}>Top Headlines</div>
          <div className={`navigation-tab ${selected === 'search' ? 'active' : ''}`} id='search' onClick={this.tabClickHandler}>Search</div>
        </div>
        { searchIsSelected ? <SearchForm getSearchResults={getSearchResults} /> : undefined }
      </div>
    )
  }
}

export default Navigation;
