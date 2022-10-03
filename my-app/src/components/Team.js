import React, { useState } from "react";

const Team = ({ team }) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <div onClick={() => setIsFront((isFront) => !isFront)}>
      <h1>{team.name}</h1>
      <h3>{team.region}</h3>
      <p>Group: {team["group stage"]}</p>
      {isFront ? (
        <img src={team.image} alt={team.name} />
      ) : (
        <ul>
          <h3>Roster</h3>
          <li>Top: {team.Top}</li>
          <li>Jungle: {team.Jungle}</li>
          <li>Mid: {team.Mid}</li>
          <li>ADC: {team.ADC}</li>
          <li>Support: {team.Support}</li>
        </ul>
      )}
    </div>
  );
};

export default Team;
