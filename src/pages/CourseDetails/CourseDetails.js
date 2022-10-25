import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetailsData = useLoaderData();
    const { name, img, description, ratings,reviews ,skills } = courseDetailsData;
    console.log(courseDetailsData);
    return (
      <div className="w-10/12 m-auto">
        <div className=" bg-base-100 shadow-xl mt-20">
          <div className="w-6/12 m-auto">
            <img src={img} alt="Album" />
          </div>

          <div className="card-body">
            <h2 className="text-center text-lg font-semibold">{name}</h2>
            <p>{description}</p>
            <div>
              <h3>Learn : {skills}</h3>
            </div>
            <div className="card-actions justify-end">
              <button className="">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;