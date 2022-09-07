import React from 'react';

import P from 'prop-types';
import { PostCard } from '../PostCard';

import './styles.css';

export function Posts({ posts = [] }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} cover={post.cover} title={post.title} body={post.body} id={post.id} />
      ))}
    </div>
  );
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      cover: P.string.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
