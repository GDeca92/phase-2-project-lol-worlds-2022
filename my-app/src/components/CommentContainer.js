import React from "react";


const CommentContainer = ({commentsList}) => {
  const commentComponent = commentsList.map((comment) => (
  <Comment 
    key={comment.id}
    username={comment.username}
    comments={comment.comments}
    />
  ))

  return (
    <div>
      {commentComponent}
    </div>
  );

};

export default CommentContainer;
