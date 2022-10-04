import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/teams">Teams</NavLink>
      <NavLink to="/groups">Groups</NavLink>
    </nav>
  );
};

export default NavBar;

