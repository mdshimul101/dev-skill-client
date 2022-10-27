import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilePdf, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, img, Duration, description, ratings, reviews, skills, id } =
    course;
  const ref = React.createRef();

  return (
    <div className="card w-72 lg:w-8/12 bg-base-200 shadow-xl mx-auto  mt-6">
      <Pdf targetRef={ref} filename="Course.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="btn btn-light w-44 mx-auto mt-2 mr-2"
          >
            Download PDF{" "}
            <FaFilePdf onClick={toPdf} className="ml-2"></FaFilePdf>
          </button>
        )}
      </Pdf>
      <div ref={ref} className="w-10/12">
        <figure className="px-10 pt-6">
          <img src={img} alt="" className="rounded-xl w-3/4" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title font-bold">{name}</h2>

          <h1 className="font-bold">About the Course:</h1>
          <p>{description}</p>
          <div>
            <p className="text-sm font-extrabold lg:text-lg lg:font-semibold">
              Learn : {skills}
            </p>
          </div>
          <div className="block lg:flex">
            <div className="flex">
              <div className="flex">
                <p className="text-slate-800 font-semibold my-3">
                  Rating : {ratings}
                </p>
                <FaStar className="flex justify-center  mt-4 mx-2 text-yellow-500"></FaStar>
              </div>

              <p className=" mt-3 mx-2 text-slate-800 font-semibold">
                review : {reviews}k
              </p>
            </div>
            <p className="text-slate-800 font-semibold my-3 ml-0 lg:ml-2 block lg:flex">
              Duration : {Duration} min
            </p>
          </div>
          <div className="flex justify-start  lg:justify-end">
            <Link to={`/checkout/${id}`}>
              <button className="btn bg-sky-800 border-none py-0">
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
