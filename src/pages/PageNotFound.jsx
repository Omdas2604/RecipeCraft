import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center text-gray-200 px-6 text-center">
      <h1 className="text-7xl font-bold text-yellow-400 mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="mb-6 text-gray-400">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
