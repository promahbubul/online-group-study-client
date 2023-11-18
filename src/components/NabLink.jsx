import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import profilePic from "../assets/images/avatar.png";

const NabLink = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout Succefully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex gap-5 justify-center items-center">
      <NavLink to="/assignments">Assignments</NavLink>
      <NavLink to="/create-assignment">Create Assignment</NavLink>
      <NavLink to={`/my-assignments/`}>My Assignments</NavLink>
      {user ? (
        <div className="flex flex-row justify-center items-center">
          <img className="w-14" src={user.photoURL ? "" : profilePic} alt="" />
          <NavLink onClick={handleLogout} to="/">
            Logout
          </NavLink>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default NabLink;
