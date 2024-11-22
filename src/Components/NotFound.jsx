import React from "react";
import { NavLink } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#141f34] to-[#081225] text-white">
      <AlertTriangle className="text-[#f87171] w-20 h-20 mb-6" />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg sm:text-xl mb-8 max-w-xl text-center">
        Oops! The page you're looking for doesn't exist. It might have been removed, renamed, or did not exist in the first place.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-[#245CF5] text-white font-medium rounded-lg transition-colors hover:bg-[#1a53ee]"
      >
        Go to Homepage
      </NavLink>
    </div>
  );
};

export default NotFound;
