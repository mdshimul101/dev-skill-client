import React from "react";
import { Link } from "react-router-dom";
import { FaSortAmountUp, FaUser } from "react-icons/fa";
import { useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("error ", error));
  };

  return (
    <nav className="navbar bg-base-300 block lg:flex lg:justify-between md:flex md:justify-between">
      <div className="flex text-xl ml-5">
        <FaSortAmountUp />
        <Link to="/" className="font-bold ml-2">
          Dev Skill
        </Link>
      </div>
      <div className="mr-5">
        <div className=" flex flex-wrap text-blue-700 font-semibold">
          <Link to="/courses" className="mr-3">
            Courses
          </Link>

          <Link to="/blog" className="mr-3">
            Blog
          </Link>
          <Link to="/faq" className="mr-3">
            FAQ
          </Link>

          <div>
            {user?.uid ? (
              <div className="flex justify-center items-center">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="h-8 rounded-full"
                    alt=""
                  />
                ) : (
                  <FaUser></FaUser>
                )}

                <button onClick={handleLogOut} className="ml-3">
                  <Link to="/register">Logout</Link>
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="mr-3">
                  Login
                </Link>
                <Link to="/register" className="mr-3">
                  Register
                </Link>
              </>
            )}
          </div>
          <DarkModeToggle
            mode={mode}
            dark="Dark"
            light="Light"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              setMode(mode);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
