import React from 'react';
import '../css/ArticlePreview.css';

const ArticlePreview = (props) => {
  const { article } = props;
  const { name } = article.source;
  const { author, title, description, url, urlToImage, publishedAt } = article;
  return (
    // entire div links to URL?
    <div className='article-box'>
      <strong>{title}</strong>
      <div >
        <div> {/* article details */}
          <p>Author: {author}</p>
          <p>Published by: {name}</p>
        </div>
        <div>
          <div> {/* Make the summary appear over a opaque image on hover*/}
            <p>Summary: {description}</p>
          </div>
          <img src={urlToImage} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
