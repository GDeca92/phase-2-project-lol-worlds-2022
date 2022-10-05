import React, { useState } from "react";
import Team from "./Team";

const TeamsContainer = ({ teams }) => {
  const [region, setRegion] = useState("All");
  const teamComponent = teams
    .filter((team) => {
      if (region === "All") return true;
      return team.region === region;
    })
    .map((team) => <Team key={team.id} team={team} />);

  return (
    <div className="teamFilter">
      <select
        className="selectRegion"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="All">All</option>
        <option value="LCS">LCS</option>
        <option value="LEC">LEC</option>
        <option value="LCK">LCK</option>
        <option value="LPL">LPL</option>
        <option value="PCS">PCS</option>
        <option value="VCS">VCS</option>
      </select>
      <br />
      <br />
      <div className="ui grid cards teamContainer">{teamComponent}</div>;
    </div>
  );
};

export default TeamsContainer;
