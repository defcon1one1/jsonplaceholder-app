// App.js
import React, { useState } from 'react';
import './App.css';
import CommonLayout from './components/CommonLayout';
import Users from './components/users/Users';
import Posts from './components/posts/Posts'; 
import Comments from './components/comments/Comments'; 
import Todos from './components/todos/Todos'; 
const App = () => {
  const [currentPage, setCurrentPage] = useState('users');

  const renderPage = () => {
    switch (currentPage) {
      case 'users':
        return <Users />;
      case 'posts':
        return <Posts />;
      case 'comments':
          return <Comments />;
      case 'todos':
            return <Todos />;
      default:
        return null; 
    }
  };

  return (
    <div className="App">
      <CommonLayout setPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
