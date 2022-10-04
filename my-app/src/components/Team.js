import React, { useState } from "react";

const Team = ({ team }) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <div
      className="ui four wide column teamCard"
      onClick={() => setIsFront((isFront) => !isFront)}
    >
      <h1 className="team_text">{team.name}</h1>
      <h3 className="team_text">Region: {team.region}</h3>
      <p className="team_text">Group: {team["group stage"]}</p>
      {isFront ? (
        <img
          className="teamLogo card__face card__face--front"
          src={team.image}
          alt={team.name}
        />
      ) : (
        <div className="team_text card__face card__face--back">
          <h1>Roster</h1>
          <p>Top: {team.Top}</p>
          <p>Jungle: {team.Jungle}</p>
          <p>Mid: {team.Mid}</p>
          <p>ADC: {team.ADC}</p>
          <p>Support: {team.Support}</p>
        </div>
      )}
    </div>
  );
};

export default Team;
