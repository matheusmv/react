import React from 'react';

import P from 'prop-types';
import './styles.css';

export function PostCard({ id, cover, title, body }) {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h3>
          {id} {title}
        </h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  id: P.number.isRequired,
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};
