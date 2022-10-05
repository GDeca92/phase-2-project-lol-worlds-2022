import React, { useState } from "react";

const CommentForm = ({ handleAddComment }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  
  const enableCommentButton = () => {
    return (post && name ? false : true)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      username: name,
      comments: post,
    };
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then((data) => handleAddComment(data));
  }

  return (
    <div className="new-comment-form">
      <form onSubmit={handleSubmit}>
        <div className="new-comment-field">
          <input
            value={name}
            type="text"
            placeholder="Display username"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={post}
            type="text"
            placeholder="Add a comment..."
            onChange={(e) => setPost(e.target.value)}
            rows="4"
          />
        <button disabled={enableCommentButton()} type="submit">Post Comment</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
