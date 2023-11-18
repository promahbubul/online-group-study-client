import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
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
  if (!isLoading) {
    return children;
  }
};

export default PrivetRoute;
