import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import student from "../../../src/Image/students.png";

const Home = () => {
  return (
    <div className="w-10/12 m-auto">
      <div className=" lg:flex-row flex row justify-between mt-1 flex-wrap">
        <div className="mt-5 lg:mt-44 mx-auto">
          <h1 className="font-bold text-5xl">
            Welcome To <span className="text-sky-700">Dev Skill</span>
          </h1>
          <p className="mt-2 text-light">
            You can grow your skill...
            <br />
            All you need to be a good software engineer
          </p>
          <Link to="/courses">
            <button className="btn btn-primary mt-5 mb-3 lg:mb-0">
              Get Started<FaArrowRight className="ml-2"></FaArrowRight>
            </button>
          </Link>
        </div>

        <div className="mt-3  ">
          <img src={student} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
