import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [marks, setMarks] = useState("");

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment = {
      title,
      description,
      image,
      category,
      level,
      marks,
      user: user.email,
    };

    axios
      .post("http://localhost:3000/api/v1/assignment", assignment)
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assignment Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mt-20">
      <div className="max-w-2xl  mx-auto bg-green-200 p-10 rounded-md">
        <form
          onSubmit={handleCreateAssignment}
          className="flex  flex-col gap-4 "
        >
          <input
            required
            onBlur={(e) => setTitle(e.target.value)}
            type="text"
            className="border outline-blue-500 border-gray-400 py-2 px-3"
            placeholder="Assignment Title"
          />
          <textarea
            onBlur={(e) => setDescription(e.target.value)}
            placeholder="Assignment Description"
            className="border outline-blue-500 border-gray-400 py-2 px-3"
            name=""
            id=""
            rows="4"
          ></textarea>
          <div className="flex flex-row gap-5 justify-between">
            <input
              required
              onBlur={(e) => setCategory(e.target.value)}
              className="border w-full outline-blue-500 border-gray-400 py-2 px-3"
              type="text"
              name=""
              placeholder="Category"
              id=" "
            />
            <input
              required
              onBlur={(e) => setMarks(e.target.value)}
              className="border w-full outline-blue-500 border-gray-400 py-2 px-3"
              type="number"
              name=""
              placeholder="Marks"
              id=" "
            />
            <select
              required
              onBlur={(e) => setLevel(e.target.value)}
              name=""
              id=""
              className=" border border-gray-400 outline-blue-500 rounded-sm px-5"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <input
            required
            onBlur={(e) => setImage(e.target.value)}
            className="border outline-blue-500 border-gray-400 py-2 px-3"
            type="text"
            placeholder="Image URL"
            name=""
            id=""
          />

          <input
            className=" bg-blue-950 text-white rounded-md text-xl font-extrabold cursor-pointer py-2 px-3"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
