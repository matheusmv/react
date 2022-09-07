import React from 'react';

import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import { loadPosts } from '../../utils/load-posts';

function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState('');

  const noMorePost = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (actualPage, numberOfPostsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(actualPage, numberOfPostsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const backPosts = () => {
    if (page <= 0) return;

    const newPage = page - postsPerPage;

    setPage(newPage);
    setPosts(allPosts.slice(newPage, newPage + postsPerPage));
  };

  const nextPosts = () => {
    if (page >= allPosts.length) return;

    const newPage = page + postsPerPage;

    setPage(newPage);
    setPosts(allPosts.slice(newPage, newPage + postsPerPage));
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <TextInput handleChange={handleChange} serchValue={searchValue} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Not Found =(</p>}

      <div className="button-container">
        {!searchValue && (
          <>
            <div className="button-container">
              <Button onClick={backPosts} text="back" disabled={page === 0} />
            </div>
            <div className="button-container">
              <Button onClick={nextPosts} text="next" disabled={noMorePost} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
