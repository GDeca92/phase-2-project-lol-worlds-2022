import React from "react";

const Group = ({ group }) => {
  const groupNames = group.map((groupTeam) => <p key={groupTeam.id}>{groupTeam.name}</p>);
  return <div>{groupNames}</div>;
};

export default Group;
