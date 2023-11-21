import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div
        className="flex justify-center h-screen items-center
        "
      >
        <progress className="progress w-96 h-5 progress-primary  mx-auto "></progress>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
  // return (
  //   <>
  //     <h1>Bangladesh</h1>
  //   </>
  // );
};

export default PrivetRoute;
