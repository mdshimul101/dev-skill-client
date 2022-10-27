import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
  const course = useLoaderData();
  const { name, price, discount } = course;
  const notify = () => toast("Successfully Enroll Course");
  return (
    <div>
      <div className="card bg-base-200 shadow-xl mx-auto w-10/12 mt-20 mb-36">
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold text-sky-700">
            Check Out
          </h2>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p>
            <strong>Total: {price}K</strong>
          </p>
          <p className="text-yellow-600">Discount: {discount}%</p>
          <p>Get Discount and Start your Course.</p>
          <div className="card-actions justify-end">
            <button onClick={notify} className="btn btn-info py-0">
              Enroll Now
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
