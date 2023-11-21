import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const SubmitModal = ({ assignment }) => {
  const { id } = useParams();
  const [pdfLink, setPdfLink] = useState("");
  const [note, setNote] = useState("");
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const email = user?.email;
  console.log(email);

  const handleSubmitModal = (e) => {
    e.preventDefault();

    const submitAssignment = {
      assID: assignment._id,
      marks: assignment.marks,
      title: assignment.title,
      image: assignment.image,
      user: user.email,
      status: "pending",
      pdfLink,
      note,
    };

    axios
      .post(`http://localhost:3000/api/v1/submit-assignment/`, submitAssignment)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.error(err));

    // console.log(submitAssignment);
  };

  const handleSubmit = () => {
    if (user?.email) {
      return document.getElementById("my_modal_5").showModal();
    }
    navigate("/login", { state: { from: location } });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <button
        className="btn bg-indigo-700 hover:bg-indigo-950 text-white"
        onClick={handleSubmit}
      >
        Take Assignment
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmitModal} className="">
            {user?.email ? (
              <>
                <div className="flex flex-row items-center">
                  <label className="text-lg w-4/12 font-semibold">
                    PDF Link:
                  </label>
                  <input
                    required
                    onBlur={(e) => setPdfLink(e.target.value)}
                    className="py-2 px-5 border-2  border-indigo-900 outline-indigo-900 rounded-md m-2 w-full"
                    type="text"
                    name="pdf"
                    placeholder="PDF Link"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="text-lg w-4/12 font-semibold text-indigo-950 underline inline ml-2 rounded-md py-2 px-5">
                    Note :
                  </label>
                  <textarea
                    required
                    onBlur={(e) => setNote(e.target.value)}
                    className="py-2 px-5 border-2 border-indigo-900 outline-indigo-900 rounded-md m-2 w-full"
                    name="note"
                    id=""
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
              </>
            ) : (
              ""
            )}
            <div className="flex justify-end">
              {user?.email ? (
                <input
                  type="submit"
                  value="Submit"
                  className="btn text-white bg-indigo-700"
                ></input>
              ) : (
                ""
              )}
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-500 text-white">Close </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SubmitModal;
