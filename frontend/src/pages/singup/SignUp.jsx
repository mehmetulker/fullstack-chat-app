import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form className="text-white">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10 bg-gray-800 focus:border-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10 bg-gray-800 focus:border-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10 bg-gray-800 focus:border-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10 bg-gray-800 focus:border-transparent focus:outline-none"
            />
          </div>
          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account? Sign up
          </a>

          <div>
            <button className="btn btn-block btn-lg mt-4 bg-blue-600 hover:bg-blue-700 text-white border-0 font-semibold shadow-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
