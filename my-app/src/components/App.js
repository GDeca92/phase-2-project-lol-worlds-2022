import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import TeamsContainer from "./TeamsContainer";
import GroupsContainer from "./GroupsContainer";
import {Switch, Route} from "react-router-dom";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/teams">
          <TeamsContainer teams={teams} />
        </Route>
        <Route path="/groups">
          <GroupsContainer teams={teams} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <h1>Access Error: 404 -- Not Found </h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
