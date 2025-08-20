import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form className="text-white">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10 bg-gray-800  focus:border-transparent focus:outline-none"
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

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account? Sign up
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-800 hover:bg-gray-900 text-white border-1 border-gray-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
