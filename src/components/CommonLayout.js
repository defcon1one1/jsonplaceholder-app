// CommonLayout.js
import React from 'react';
import './common.css';

const CommonLayout = ({ setPage }) => {
  return (
    <div>
      <h3>Fetch Jsonplaceholder</h3>
      <button className="common-button" onClick={() => setPage('users')}>
        Users
      </button>
      <button className="common-button" onClick={() => setPage('posts')}>
        Posts
      </button>
      <button className="common-button" onClick={() => setPage('comments')}>
        Comments
      </button>
      <button className="common-button" onClick={() => setPage('todos')}>
        Todos
      </button>
    </div>
  );
};

export default CommonLayout;
