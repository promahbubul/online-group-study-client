import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyAssignmentCart = ({ assignment }) => {
  //   console.log(assignment);
  return (
    <>
      <div className="flex flex-row rounded-md gap-5 p-10 shadow-2xl  shadow-indigo-950 ">
        <img src={assignment?.image} alt="" className="w-3/12 h-44" />
        <div className="flex flex-col justify-evenly w-full">
          <h1 className="text-3xl font-bold text-indigo-800">
            {assignment.title}
          </h1>
          <p className="text-black text-lg font-semibold mt-5">
            Marks:{" "}
            <span className="text-orange-700 font-extrabold text-2xl py-2 px-4 ">
              {assignment.marks}
            </span>
          </p>
          {assignment?.status === "pending" ? (
            <span className="bg-red-400 w-2/12 rounded-sm py-1 px-2">{assignment?.status}</span>
          ) : (
            <p className="">{assignment?.status}</p>
          )}
          <div className="flex justify-between flex-row w-full">
            <p className="text-indigo-400 text-sm">{assignment?.user}</p>
            <button className="btn  btn-primary">Give Mark</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAssignmentCart;
