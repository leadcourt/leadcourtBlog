import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0); // React Router v6+ supports this to reload current route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600 mb-6">
        {error?.statusText || error?.message || "Unknown error"}
      </p>
      <div className="flex gap-3 items-center ">
        <Link
          to="/"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Go to Home
        </Link>
        <button
          onClick={refreshPage}
          className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
