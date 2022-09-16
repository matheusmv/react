import P from 'prop-types';

import { useEffect, useMemo, useRef, useState } from 'react';

import { Input } from '../../components/Input';
import { PostCard } from '../../components/PostCard';

const Post = ({ post, handleClick }) => {
  return (
    <PostCard
      postId={post.id}
      postTitle={post.title}
      postText={post.body}
      titleClickFn={() => handleClick(post.title)}
    />
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

export const ExampleUseEffectAndUseMemo = () => {
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
    <div className="component-card">
      <div className="card--content">
        <Input
          inputType={'search'}
          inputRef={input}
          inputValue={value}
          onChangeFn={(e) => setValue(e.target.value)}
        />
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
    </div>
  );
};
