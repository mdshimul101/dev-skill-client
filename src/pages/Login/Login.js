import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error ", error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    providerLogin(providerGitHub)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-semibold text-sky-600 mt-10 ">
        Login
      </h3>
      <div className="w-10/12 lg:w-6/12  m-auto shadow-xl p-7 rounded-md mt-10">
        <form onSubmit={handleSubmit} className="mb-4 ">
          <div className="mb-3">
            <label className="mr-8">Email address</label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
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
            Log In
          </button>
          <p className="text-red-800 py-1">{error}</p>
        </form>

        <hr />

        <div className="block lg:flex justify-center  mt-5">
          <Link>
            <button
              onClick={handleGoogleSignIn}
              className="mb-3 w-48 grow  flex justify-center items-center rounded-md border text-center border-sky-500 p-2 mr-2"
            >
              <FaGoogle className="mr-3 text-sky-700"></FaGoogle>
              Log In with Google
            </button>
          </Link>
          <Link>
            <button
              onClick={handleGitHubSignIn}
              className="mb-3  grow pt-2 flex justify-center items-center rounded-md border text-center border-sky-500 p-2"
            >
              <FaGithub className="mr-3 text-sky-700"></FaGithub>
              Log In with GitHub
            </button>
          </Link>
        </div>
        <p className="text-slate-900 font-semibold mt-3 text-center">
          Already have an account ?
          <Link to="/register" className="text-sky-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
