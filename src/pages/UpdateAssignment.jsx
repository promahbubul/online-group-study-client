import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [title, setTitle] = useState(assignment?.title);
  const [description, setDescription] = useState(assignment?.description);
  const [image, setImage] = useState(assignment?.image);
  const [category, setCategory] = useState(assignment?.category);
  const [level, setLevel] = useState(assignment?.level);
  const [marks, setMarks] = useState(assignment?.marks);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const UpdateAssignment = {
      title,
      description,
      image,
      category,
      level,
      marks,
    };
    axios
      .put(`http://localhost:3000/api/v1/assignment/${id}`, UpdateAssignment)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            navigate("/assignments");
          }, 1500);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="mt-20">
      <div className="max-w-2xl  mx-auto bg-green-200 p-10 rounded-md">
        <form onSubmit={handleUpdate} className="flex  flex-col gap-4 ">
          <input
            defaultValue={assignment?.title}
            required
            onBlur={(e) => setTitle(e.target.value)}
            type="text"
            className="border outline-blue-500 border-gray-400 py-2 px-3"
            placeholder="Assignment Title"
          />
          <textarea
            defaultValue={assignment?.description}
            onBlur={(e) => setDescription(e.target.value)}
            placeholder="Assignment Description"
            className="border outline-blue-500 border-gray-400 py-2 px-3"
            name=""
            id=""
            rows="4"
          ></textarea>
          <div className="flex flex-row gap-5 justify-between">
            <input
              defaultValue={assignment?.category}
              required
              onBlur={(e) => setCategory(e.target.value)}
              className="border w-full outline-blue-500 border-gray-400 py-2 px-3"
              type="text"
              name=""
              placeholder="Category"
              id=" "
            />
            <input
              defaultValue={assignment?.marks}
              required
              onBlur={(e) => setMarks(e.target.value)}
              className="border w-full outline-blue-500 border-gray-400 py-2 px-3"
              type="number"
              name=""
              placeholder="Marks"
              id=" "
            />
            <select
              defaultValue={assignment?.level}
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
            defaultValue={assignment?.image}
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
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
