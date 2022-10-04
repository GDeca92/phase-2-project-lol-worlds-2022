import React from "react";
import Team from "./Team";

const TeamsContainer = ({ teams }) => {
  const teamComponent = teams.map((team) => <Team key={team.id} team={team} />);

  return <div className="ui grid cards teamContainer">{teamComponent}</div>;
};

export default TeamsContainer;
