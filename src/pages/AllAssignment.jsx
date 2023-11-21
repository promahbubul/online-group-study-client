import React, { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

const AllAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [sortOrder, setSortOrder] = useState(["easy", "medium", "hard"]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/assignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, []);

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    setSelectedDifficulty(selectedDifficulty);

    // Update sortOrder based on the selected difficulty level
    if (selectedDifficulty === "easy") {
      setSortOrder(["easy", "medium", "hard"]);
    } else if (selectedDifficulty === "medium") {
      setSortOrder(["medium", "easy", "hard"]);
    } else if (selectedDifficulty === "hard") {
      setSortOrder(["hard", "easy", "medium"]);
    }
  };

  const sortedAssignments = [...assignments].sort((a, b) => {
    return sortOrder.indexOf(a.difficulty) - sortOrder.indexOf(b.difficulty);
  });

  // const filteredAssignments = sortedAssignments.filter(
  //   (assignment) => assignment.difficulty === selectedDifficulty
  // );

  const handleDeleteAssignment = (deletedAssignmentId) => {
    // Update the state by filtering out the deleted assignment
    setAssignments((prevAssignments) =>
      prevAssignments.filter(
        (assignment) => assignment._id !== deletedAssignmentId
      )
    );
  };

  return (
    <div className="md:max-w-6xl pb-10 w-full mx-auto box-border shadow-indigo-950 shadow-md mt-5 px-10">
      <h2 className="text-3xl box-border bg-indigo-950 text-white py-5 px-10 font-extrabold">
        Total Assignment:
        <span className="bg-orange-700 rounded-full py-2 px-2">
          {sortedAssignments.length}
        </span>
      </h2>
      <div className="flex justify-end my-3">
        <select
          name=""
          id=""
          className="px-5 py-3 text-indigo-950 rounded-full w-3/12 border-0 bg-indigo-100 hover:bg-indigo-200 outline-none"
          onChange={handleDifficultyChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 mt-20 gap-5">
        {sortedAssignments.map((assignment) => (
          <AssignmentCard
            onDelete={handleDeleteAssignment}
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
