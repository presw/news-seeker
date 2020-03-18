import React from 'react';
import axios from 'axios';
import Articles from './Articles';
import { backEndUrl } from '../../.config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'top-headlines',
      articles: [],
    };
  }

  componentDidMount() {
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    axios.get(`${backEndUrl}/api/search/top-headlines/`)
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
      <div>
        {/* <Title /> */}
        {/* <Navigation /> */}
        <h2>News Seeker</h2>
        <Articles articles={articles}/>
      </div>
    )
  }
}

export default App;
