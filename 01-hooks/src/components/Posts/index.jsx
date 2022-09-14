import P from 'prop-types';

import { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h3 onClick={() => handleClick(post.title)}>{post.title}</h3>
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
  handleClick: P.func,
};

export const Posts = () => {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);
  const input = useRef(null);

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setPosts(res));
    }, 5000);
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input
            ref={input}
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="posts-container">
          {useMemo(() => {
            return (
              posts.length > 0 &&
              posts.map((post) => (
                <Post key={post.id} post={post} handleClick={handleClick} />
              ))
            );
          }, [posts])}
          {posts.length <= 0 && <p>Loading...</p>}
        </div>
      </header>
    </div>
  );
};
