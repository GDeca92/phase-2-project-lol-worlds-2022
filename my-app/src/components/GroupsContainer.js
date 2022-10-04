import React from "react";
import Group from "./Group";

const Groups = ({ teams }) => {
  const groupA = teams.filter((group) => group["group stage"] === "A");
  const groupB = teams.filter((group) => group["group stage"] === "B");
  const groupC = teams.filter((group) => group["group stage"] === "C");
  const groupD = teams.filter((group) => group["group stage"] === "D");

  return (
    <div className="groupContainer">
      <div className="groupCard">
        <h1 className="groupTitle">Group A</h1>
        <Group group={groupA} />
      </div>
      <div className="groupCard">
        <h1 className="groupTitle">Group B </h1>
        <Group group={groupB} />
      </div>
      <div className="groupCard">
        <h1 className="groupTitle">Group C</h1>
        <Group group={groupC} />
      </div>
      <div className="groupCard">
        <h1 className="groupTitle">Group D</h1>
        <Group group={groupD} />
      </div>
    </div>
  );
};

export default Groups;
