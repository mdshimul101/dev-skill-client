import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  console.log(courses);
  return (
    <div className="grid grid-cols-12 gap-4 mx-5">
      <div className="col-start-1 lg:col-end-4 col-end-12  mt-5">
        {courses.map((course) => (
          <p className="mt-5 text-sky-700" key={course.id}>
            <Link to={`/courses/${course.id}`} className="text-xl text-light">
              {course.name}
            </Link>
          </p>
        ))}
      </div>

      <div className="col-start-1 lg:col-start-4 col-end-12 grid gap-5 grid-cols-1 lg:grid-cols-2 my-10">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
