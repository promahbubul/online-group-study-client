import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <NavLink to="/assignments" className="text-2xl mb-5 hover:text-orange-500">Assignments</NavLink>
      <NavLink to="/assignments" className="text-2xl mb-5 hover:text-orange-500">Create Assignment</NavLink>
      <NavLink to="/assignments" className="text-2xl mb-5 hover:text-orange-500">My Assignments</NavLink>
      <NavLink to="/assignments" className="text-2xl mb-5 hover:text-orange-500">Login</NavLink>
    </>
  );
};

export default Sidebar;
