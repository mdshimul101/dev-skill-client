import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetailsData = useLoaderData();
  const { name, img, description, ratings, skills, Duration, reviews, id } =
    courseDetailsData;
  console.log(courseDetailsData);
  return (
    <div className="w-10/12 m-auto">
      <div className="App mt-10">
        <button className="btn mr-20">Download PDF</button>
      </div>

      <div className=" bg-base-100 shadow-xl mt-10">
        <div className="w-6/12 m-auto">
          <img src={img} alt="Album" />
        </div>

        <div className="card-body">
          <h2 className="text-center text-slate-800 text-lg font-semibold  mr-20">
            {name}
          </h2>
          <p>{description}</p>
          <div>
            <h3 className="text-lg font-semibold">Learn : {skills}</h3>
          </div>
          <div className="flex">
            <div className="flex">
              <p className="text-slate-800 font-semibold my-3">
                Rating : {ratings}
              </p>
              <FaStar className="flex justify-center  mt-4 mx-2 text-yellow-500"></FaStar>
              <p className=" mt-3 mx-2 text-slate-800 font-semibold">
                review : {reviews}k
              </p>
            </div>
            <p className="text-slate-800 font-semibold my-3 ml-2">
              Duration : {Duration} min
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${id}`}>
              <button className="btn bg-sky-800 border-none">
                Get Premium Access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
