import React from "react";

const Banner = () => {
  return (
    <div className=" text-center  py-10 mx-auto bg-banner  bg-cover bg-center text-white bg-orange-500 mix-blend-multiply h-[450px]">
      <div className="md:max-w-6xl mx-auto">
        <h1 className=" text-4xl font-extrabold  mb-5">
          <span className="text-green-500">FusionLearn</span>
          : <br />
          <span className="text-orange-500">Igniting Brilliance Together </span>
        </h1>
        <p className="md:max-w-3xl bg-[#43326499] p-5 leading-8 rounded-md mb-5 text-xl  mx-auto">
          Join dynamic online study groups, where minds converge to spark
          brilliance. Unleash the power of shared knowledge and elevate your
          academic journey. Embrace learning, united.
        </p>
        <button className="btn btn-md btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default Banner;
