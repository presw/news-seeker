import React from 'react';
import axios from 'axios';
import Articles from './Articles';
import Navigation from './Navigation';
import { backEndHost } from '../../.config';
import '../css/App.css';

const backEndUrl = process.env.LOCAL_HOST || backEndHost;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.getTopHeadlines = this.getTopHeadlines.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  componentDidMount() {
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    axios.get(`${backEndUrl}/api/search/top-headlines/`, { params: { country: 'us' }})
    .then(response => {
      const { articles } = response.data;
      this.setState({ articles });
    })
    .catch(err => {
      console.log(err);
    });
  }

  getSearchResults(q) {
    axios.get(`${backEndUrl}/api/search/articles`, { params: { q, language: 'en' }})
    .then(response => {
      const { articles } = response.data;
      this.setState({ articles });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className='main-body'>
        {/* <Title /> */} {/* NOTE: is a title component necessary? */}
        <h2>News Seeker</h2>
        <div>Powered by <a href={'https://newsapi.org'}>NewsAPI.org</a></div>
        <Navigation articles={articles} getSearchResults={this.getSearchResults} getTopHeadlines={this.getTopHeadlines}/>
        <Articles articles={articles}/>
      </div>
    )
  }
}

export default App;
