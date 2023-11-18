import React from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const Feature = ({ category }) => {
  return (
    <div>
      <div
        className=" grid md:grid-cols-4 max-w-6xl gap-5 my-20
       mx-auto "
      >
        {category?.map((item) => (
          <Link key={item.id} to={`/category/${item.id}`}>
            <img src={item.image} alt="" className="w-full h-64 rounded-md" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;
