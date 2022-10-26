import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className=" bg-cyan-400 text-center p-10">
        <h1 className="font-bold text-4xl text-center">FAQ</h1>
        <p className="">Frequently Asked Questions by Students</p>
      </div>
      <div className="w-10/12 mx-auto mt-12 mb-40">
        <h3 className="text-2xl my-4 font-semibold text-slate-800  ml-2">
          Course Related
        </h3>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Are Dev Skill courses Online or Offline?
          </div>
          <div className="collapse-content">
            <p>
              Dev Skill is a 100% e-Learning platform and we only provide online
              courses. We do not provide offline / onsite courses and we do not
              have any plan in near future to provide such course.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            Do you provide video recording of live classes?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we provide recording with some conditions. A student needs to
              regularly attend classes and exams. In case of any emergency
              problem, student needs to inform course instructor immediately and
              give proper explanation for his/her absence. If someone is absent
              without contacting course teacher, then video will not be
              provided. Also students needs to follow terms & conditions of
              using the video recording for personal use only.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            Do you provide certificates after completing a course?
          </div>
          <div className="collapse-content">
            <p>
              Previously we have provided printed certificates to passing
              students only. But going forward, we will provide digital
              certificate to passing students. We do not provide certificate for
              only attending course.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1"
        >
          <div className="collapse-title text-xl font-medium">
            Do you provide job placement upon passing course?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we provide help in job placement in selected courses. But it
              is not guaranteed. If any company contact with us for recruiting
              our students, we refer our passing students. In future we have
              plan to extend this more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
