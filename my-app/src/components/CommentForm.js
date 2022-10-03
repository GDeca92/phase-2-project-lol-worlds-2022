import React, { useState } from "react";

const CommentForm = ({handleAddComment}) => {
    const [name, setName] = useState("")
    const [post, setPost] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newComment = {
      username: name,
      comments: post,
    }
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newComment)
    })
    .then(r=>r.json())
    .then(data=> handleAddComment(data))
  }

  return (
    <div className="new-comment-form">
        <h2>New Comment</h2>
        <form onSubmit={handleSubmit}>
            <input value={name} type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
            <input value={post} type="text" placeholder="Comment" onChange={(e) => setPost(e.target.value)}/>
            <button type="submit">Post</button>
        </form>
    </div>
  )
}

export default CommentForm;