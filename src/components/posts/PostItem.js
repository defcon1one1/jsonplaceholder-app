// PostItem.js
import React from 'react';

const PostItem = ({ id, title, body }) => {
  return (
    <div className="list" key={id}>
      <span>{title}</span>
      <span>{body}</span>
    </div>
  );
};

export default PostItem;
