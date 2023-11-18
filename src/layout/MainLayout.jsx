import React from "react";
import { Link } from "react-router-dom";
import NabLink from "../components/NabLink";
import Sidebar from "../components/Sidebar";
import logoImage from "../assets/images/logo.png";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar   bg-indigo-950 text-white ">
          <div className=" w-[72rem] flex flex-row mx-auto justify-between ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <img style={{ width: 80 }} src={logoImage} alt="" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <NabLink />
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-white bg-indigo-950">
          {/* Sidebar content here */}
          <Sidebar />
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
