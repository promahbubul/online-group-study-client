import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AssignmentCard = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  console.log();
  const navigate = useNavigate();

  const handleAssignment = (id) => {
    navigate(`/assignment/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    console.log("Delete");
    axios
      .delete(`http://localhost:3000/api/v1/delete-assignment/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/api/v1/assignments/${user.email}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className="w-full shadow-2xl rounded-md  shadow-indigo-950 p-5">
      <img
        src={assignment.image}
        alt=""
        className="w-full h-[220px]   rounded-md"
      />
      <p className="text-xl font-extrabold -top-20 relative inline-block bg-indigo-500 text-white px-5 py-2">
        {assignment.marks}
      </p>
      <div className="">
        <h4 className="text-xl text-indigo-950 font-bold mt-3">
          {assignment.title}
        </h4>

        <span className="text-pink-500">{assignment.level}</span>

        <div className=" flex justify-between my-3">
          <button
            onClick={() => handleUpdate(assignment._id)}
            className="btn bg-indigo-950 text-white"
          >
            Update
          </button>
          {user?.email === assignment.user ? (
            <button
              onClick={() => handleDelete(assignment._id)}
              className="btn bg-red-600 text-white"
            >
              Delete
            </button>
          ) : (
            ""
          )}

          <button
            onClick={() => handleAssignment(assignment._id)}
            className="btn bg-indigo-950 text-white"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
