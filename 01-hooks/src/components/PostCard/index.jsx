import P from 'prop-types';

import './styles.css';

export function PostCard({ postId, postTitle, postText, titleClickFn }) {
  return (
    <div className="post-card" key={postId}>
      <h3 className="post-card-title" onClick={titleClickFn}>
        {postTitle}
      </h3>
      <p className="post-card-body">{postText}</p>
    </div>
  );
}

PostCard.propTypes = {
  postId: P.number,
  postTitle: P.string,
  postText: P.string,
  titleClickFn: P.func,
};
