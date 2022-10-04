import React from "react";

const Group = ({ group }) => {
  const groupNames = group.map((groupTeam) => (
    <div className="teamLogoContainer">
      <p className="players" key={groupTeam.id}>
        {groupTeam.name}
      </p>
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
      <br />
    </div>
  );
};

export default Group;
