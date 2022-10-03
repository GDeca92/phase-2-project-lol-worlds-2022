import React from "react";
import Group from "./Group";

const Groups = ({ teams }) => {
  const groupA = teams.filter((group) => group["group stage"] === "A");
  const groupB = teams.filter((group) => group["group stage"] === "B");
  const groupC = teams.filter((group) => group["group stage"] === "C");
  const groupD = teams.filter((group) => group["group stage"] === "D");

  return (
    <div>
      <h1>Group A : </h1>
      <Group group={groupA} />

      <h1>Group B : </h1>
      <Group group={groupB} />

      <h1>Group C : </h1>
      <Group group={groupC} />

      <h1>Group D : </h1>
      <Group group={groupD} />
    </div>
  );
};

export default Groups;
