import React from 'react';
import './Post.css';

function Post({ username, userhandle, content, image, likes, comments, shares }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="username">{username}</div>
        <div className="userhandle">{userhandle}</div>
      </div>
      <div className="post-content">
        <p>{content} <span>Read More</span></p>
        <img src={image} alt="post" />
      </div>
      <div className="post-footer">
        <div>{likes} Likes</div>
        <div>{comments} Comments</div>
        <div>{shares} Shares</div>
      </div>
    </div>
  );
}

export default Post;

