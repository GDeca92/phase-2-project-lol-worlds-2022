import React from "react";

const Team = ({ team }) => {
  return (
    <div>
      <h1>{team.name}</h1>
      <img src={team.image} alt={team.name} />
      <h3>{team.region}</h3>
      <p>Group: {team["group stage"]}</p>
      <ul>
        Roster
        <li>Top: {team.Top}</li>
        <li>Jungle: {team.Jungle}</li>
        <li>Mid: {team.Mid}</li>
        <li>ADC: {team.ADC}</li>
        <li>Support: {team.Support}</li>
      </ul>
    </div>
  );
};

export default Team;
