import React from "react";

const Comment = ({username, comments}) => {
  return (
  <div className="display-post">
    <h5>{username}</h5>
    <p>{comments}</p>
  </div>
  )
};

export default Comment;
