import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    

    return (
      <div>
        <h3 className="text-center text-3xl font-semibold text-sky-600 mt-10 ">
          Register
        </h3>

        <div className="w-10/12 lg:w-6/12  m-auto shadow-xl p-7 rounded-md mt-10">
          <form className="mb-4 ">
            <div className="mb-3">
              <label className="mr-14">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>

            <div className="mb-3">
              <label className="mr-14">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>
            <div className="mb-3">
              <label className="mr-8">Email address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>
            <div className="mb-3">
              <label className="mr-16">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Your password"
                className="input input-bordered input-secondary w-full max-w-xs"
              />
            </div>

            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>

          <hr />

          <div className="block lg:flex justify-center  mt-5">
            <button className="mb-3 w-48 grow  flex justify-center items-center rounded-md border text-center border-sky-500 p-2 mr-2">
              <FaGoogle className="mr-3 text-sky-700"></FaGoogle>
              Register with Google
            </button>
            <button className="mb-3  grow pt-2 flex justify-center items-center rounded-md border text-center border-sky-500 p-2">
              <FaFacebook className="mr-3 text-sky-700"></FaFacebook>
              Register with Facebook
            </button>
          </div>
          <p className="text-slate-900 font-semibold mt-3 text-center">
            Already have an account ?
            <Link to="/login" className="text-sky-800">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;