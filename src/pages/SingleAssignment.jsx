import React, { useContext, useEffect, useState } from "react";
import SubmitModal from "../components/SubmitModal";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const SingleAssignment = () => {
  // const [assignment, setAssignment] = useState("");
  // const { id } = useParams();
  const assignment = useLoaderData();

  // useEffect(() => {
  //   axios
  //     .get(``)
  //     .then((data) => {
  //       // const
  //       // console.log(data.data);
  //       setAssignment(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div
      className={
        "w-full max-w-5xl  mx-auto my-5 shadow-2xl  rounded-xl p-10  shadow-indigo-900"
      }
    >
      <div className="w-full">
        <img
          className="w-full h-[400px] bg-indigo-950 p-1 rounded-lg"
          src={assignment?.image}
          alt=""
        />
        <div className="mt-5 px-5">
          <h4 className="text-3xl font-bold text-indigo-800">
            {assignment?.title}
          </h4>
          <p className="text-justify text-lg  my-2 leading-8 ">
            {assignment?.description}
          </p>
          <div className="flex justify-end my-2">
            <SubmitModal assignment={assignment}></SubmitModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
