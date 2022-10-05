import React from "react";

const Group = ({ group }) => {
  const groupNames = group.map((groupTeam) => (
    <div key={groupTeam.id} className="teamLogoContainer">
      <p className="players">{groupTeam.name}</p>
      <img
        className="groupTeamIcon"
        src={groupTeam.image}
        alt={groupTeam.name}
      />
    </div>
  ));
  return (
    <div className="groupPlayers">
      <div className="playersContainer">{groupNames}</div>
    </div>
  );
};

export default Group;
