import React, {useEffect, useState} from "react";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";

function Homepage (){
  const [commentsList,setCommentsList] = useState([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/comments")
    .then(r => r.json())
    .then(data => setCommentsList(data))
  }, [])

  function handleAddComment(newObj){
    setCommentsList([...commentsList, newObj])
  }


  return (
    <>
      <div>
        <div className="comments">
          <h1>About</h1>
        </div>
      <CommentContainer commentsList={commentsList} newComment={newComment} setNewComment={setNewComment}/>
      <CommentForm handleAddComment={handleAddComment}/>
      </div>
    </>
  );
};

export default Homepage;
