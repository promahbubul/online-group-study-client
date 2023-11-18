import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../components/AssignmentCard";
import MyAssignmentCart from "../components/MyAssignmentCart";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const MyAssignment = () => {
  const [myAssignment, setAssignment] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/my-assignment/${user?.email}`)
      .then((res) => {
        setAssignment(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(myAssignment);

  // const { user, isLoading } = useContext(AuthContext);
  // const { email } = user;
  // const myAssignment = useLoaderData();

  // setTimeout(() => {
  //   axios
  //     .get(`http://localhost:3000/api/v1/submit-assignment/${email}`)
  //     .then((res) => {
  //       console.log(email);
  //       setAssignment(res.data);
  //     });
  // }, 1000);

  // const myAssignment = useLoaderData();

  return (
    <div>
      <div className="shadow-md max-w-6xl flex flex-col gap-5 mx-auto my-10 p-10 rounded-sm shadow-indigo-500">
        {myAssignment?.map((assignment) => (
          <MyAssignmentCart
            assignment={assignment}
            key={assignment?._id}
          ></MyAssignmentCart>
        ))}
      </div>
    </div>
  );
};

export default MyAssignment;
