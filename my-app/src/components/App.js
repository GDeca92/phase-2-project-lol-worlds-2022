import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import TeamsContainer from "./TeamsContainer";
import Groups from "./Groups";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <TeamsContainer />
      <Groups />
    </div>
  );
}

export default App;
