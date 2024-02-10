import React from 'react';

const CommentItem = ({ id, name, email, body }) => {
  return (
    <div className="list" key={id}>
      <span>{name}</span>
      <span>{email}</span>
      <span>{body}</span>
    </div>
  );
};

export default CommentItem;
