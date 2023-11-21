import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout Succefully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <NavLink
        to="/assignments"
        className="text-2xl mb-5 hover:text-orange-500"
      >
        Assignments
      </NavLink>
      <NavLink
        to="/create-assignment"
        className="text-2xl mb-5 hover:text-orange-500"
      >
        Create Assignment
      </NavLink>
      <NavLink
        to="/my-assignments/"
        className="text-2xl mb-5 hover:text-orange-500"
      >
        My Assignments
      </NavLink>

      {user ? (
        <div className="flex flex-row justify-center items-center">
          <img className="w-14" src={user.photoURL ? "" : profilePic} alt="" />
          <NavLink onClick={handleLogout} to="/">
            Logout
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/assignments"
          className="text-2xl mb-5 hover:text-orange-500"
        >
          Login
        </NavLink>
      )}
    </>
  );
};

export default Sidebar;
