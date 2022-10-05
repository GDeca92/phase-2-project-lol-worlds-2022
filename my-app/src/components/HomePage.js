import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm";

function Homepage() {
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((r) => r.json())
      .then((data) => setCommentsList(data));
  }, []);

  function handleAddComment(newObj) {
    setCommentsList([...commentsList, newObj]);
  }

  return (
    <>
      <div id="homepage">
        <img
          src="https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltee0947ea235d63dd/632140fd5a8acf5d92ccd8e0/W22_TEMPLATE_16x9_KV_GENERIC_PLAYINS.png?width=700&height=350"
          alt="homepage"
        />
        <div className="about-section">
          <h1>What is Worlds Championship?</h1>
          <p>
            The League of Legends World Championship (also known as Worlds) is
            the premier yearly international tournament that brings together the
            top teams to compete for the Summoner’s Cup and earn the title of
            World Champion. More than 800 players on 100+ professional League of
            Legends esports teams compete across a dozen leagues globally
            throughout the year to qualify for the tournament. The event moves
            between host regions each year; this year, four cities across North
            America will play host to the various tournament stages.
          </p>
        </div>
        <div id="comment-question">
          <p>Who do you want to win Worlds?</p>
        </div>
        <CommentContainer
          commentsList={commentsList}
          newComment={newComment}
          setNewComment={setNewComment}
        />
        <CommentForm handleAddComment={handleAddComment} />
      </div>
    </>
  );
}

export default Homepage;
