import React from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const Feature = ({ category }) => {
  // console.log(category);
  return (
    <div>
      <div
        className=" grid md:grid-cols-4 max-w-6xl gap-5 my-20
       mx-auto "
      >
        {category?.map((item) => (
          <Link key={item.id} to={`/category/${item.name}`}>
            <img
              src={item.image}
              alt=""
              className="w-full md:h-64 h-96 rounded-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;
