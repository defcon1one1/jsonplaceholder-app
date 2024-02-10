import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import "./comment.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(50); // Set the number of comments to display per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err);
      });
  };
  

  // Calculate the indexes of the comments to display for the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h3>Comments</h3>

      <div>
        {currentComments.map((comment) => (
          <CommentItem
            id={comment.id}
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(comments.length / commentsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Comments;
