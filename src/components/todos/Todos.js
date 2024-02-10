import React, { useState, useEffect } from "react";
import TodosItem from "./TodosItem";
import "./todos.css";

const Todoss = () => {
  const [todos, setTodoss] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10); // Set the number of todos to display per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoss(data))
      .catch((err) => {
        console.log(err);
      });
  };
  

  // Calculate the indexes of the todos to display for the current page
  const indexOfLastTodos = currentPage * todosPerPage;
  const indexOfFirstTodos = indexOfLastTodos - todosPerPage;
  const currentTodoss = todos.slice(indexOfFirstTodos, indexOfLastTodos);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h3>Todoses?</h3>

      <div>
        {currentTodoss.map((todos) => (
          <TodosItem
            id={todos.id}
            key={todos.id}
            title={todos.title}            
            completed={todos.completed}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(todos.length / todosPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Todoss;
