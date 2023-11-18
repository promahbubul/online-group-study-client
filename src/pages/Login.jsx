import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, singIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSign = (e) => {
    e.preventDefault();
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        console.log();
        ("login Successfully");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSign} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control flex flex-row items-center justify-around text-lg bg-gray-300 p-2 rounded-md cursor-pointer mt-6">
              <FcGoogle className="text-4xl" />
              <span>Login with Google</span>
            </div>
            <p className="mt-5">
              I have no accout.{" "}
              <Link to="/register" className="text-blue-700 underline">
                {" "}
                create a account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
