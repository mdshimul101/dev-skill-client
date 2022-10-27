import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("error ", error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-semibold text-sky-600 mt-10 ">
        Register
      </h3>

      <div className="w-10/12 lg:w-6/12  m-auto shadow-xl p-7 rounded-md mt-10">
        <form onSubmit={handleSubmit} className="mb-4 ">
          <div className="mb-3">
            <label className="mr-12">Your Name : </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>

          <div className="mb-3">
            <label className="mr-14">Photo URL :</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-3">
            <label className="mr-8">Email address :</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-3">
            <label className="mr-16">Password :</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Your password"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn btn-info">
            Register
          </button>
          <p className="text-red-800 py-1">{error}</p>
        </form>

        <hr />

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
