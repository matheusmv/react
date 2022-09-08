import P from 'prop-types';

import { useEffect, useMemo, useState } from 'react';

const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export const Posts = () => {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setPosts(res));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="posts-container">
          {useMemo(() => {
            return (
              posts.length > 0 &&
              posts.map((post) => <Post key={post.id} post={post} />)
            );
          }, [posts])}
          {posts.length <= 0 && <p>Loading...</p>}
        </div>
      </header>
    </div>
  );
};
