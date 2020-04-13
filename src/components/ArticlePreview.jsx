import React from 'react';
import '../css/ArticlePreview.css';

const ArticlePreview = (props) => {
  const { article } = props;
  const { name } = article.source;
  const { author, title, description, url, urlToImage, publishedAt } = article;
  return (
    <div className='article-box'>
      <a className='article-link' href={url} target='_blank'>
        <strong>{title}</strong>
        <div>
          <div> {/* article details */}
            <p>Author: {author}</p>
            <p>Published by: {name}</p>
          </div>
          <div className='container'>
            <img className='thumbnail' src={urlToImage} alt=""/>
            <div className='thumbnail-overlay'>
              <div className='summary-text'>{description}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ArticlePreview;
