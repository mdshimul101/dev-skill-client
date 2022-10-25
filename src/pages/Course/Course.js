import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const { img, name, description, ratings, id, Duration } = course;
    return (
      <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
          <figure>
            <img src={img} className="w-full h-52 " alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-center font-semibold text-2xl">{name}</h2>
            <p>
              {description.slice(0, 150) + "..."}
              <Link
                to={`/courses/${(id)}`}
                className="text-blue-900 font-semibold"
              >
                Read more
              </Link>
            </p>
            <div className=" flex justify-between">
              <div className="flex">
                <p className="text-slate-800 font-semibold my-3 flex justify-center">
                  Rating : {ratings}
                  <FaStar className="text-center flex justify-center mt-1 mx-2 text-yellow-500"></FaStar>
                </p>
                <p className="text-slate-800 font-semibold my-3 ml-2 flex justify-center">
                  Duration : {Duration} min
                </p>
              </div>

              <button className="bg-blue-700 px-4 btn border-none text-white">
                <Link to={`/courses/${(id)}`}>Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;