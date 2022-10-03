import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import TeamsContainer from "./TeamsContainer";
import GroupsContainer from "./GroupsContainer";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <TeamsContainer teams={teams} />
      <GroupsContainer teams={teams} />
    </div>
  );
}

export default App;
