import React from 'react';
import ArticlePreview from './ArticlePreview';

const Articles = (props) => {
  const { articles } = props;
  return (
    <div>
      {articles.map(article => <ArticlePreview article={article}/>)}
    </div>
  );
};

export default Articles;
