// TodosItem.js

import React from 'react';

const TodosItem = ({ id, title, completed }) => {
  return (
    <div className={`list ${completed ? 'completed' : 'incomplete'}`} key={id}>
      <span>{title}</span>
      <span>{completed ? 'Completed' : 'Incomplete'}</span>
    </div>
  );
};

export default TodosItem;
