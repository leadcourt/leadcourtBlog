import React, { useEffect, useState } from "react";
import LogoImg from "../../assets/logo/logo.png";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  accessTokenState,
  refreshTokenState,
  userState,
} from "../../utils/atom/authAtom";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userState);
  const accessToken = useRecoilValue(accessTokenState);

  const resetAccessToken = useResetRecoilState(accessTokenState);
  const resetRefreshToken = useResetRecoilState(refreshTokenState);
  const resetUser = useResetRecoilState(userState);

  const navigate = useNavigate();

  const logout = () => {
    resetAccessToken();
    resetRefreshToken();
    resetUser();
    toast.success("Log out successful");
    navigate("/blog/", { replace: true });
  };

  return (
    <header className="w-full top-0 !z-50 glass-effect border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="" className="max-h-[50px]">
            <div className="flex-shrink-0">
              <img src={LogoImg} alt="Logo" className="h-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/#features" className="text-gray-600 hover:text-primary-500">Features</Link>
            <Link to="/#how-it-works" className="text-gray-600 hover:text-primary-500">How it Works</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-primary-500">Pricing</Link>
            <Link to="/data-collection.html" className="text-gray-600 hover:text-primary-500">Our Data</Link> */}
            <Link
              to="http://leadcourt.com/"
              className="text-gray-600 hover:text-primary-500"
            >
              Home
            </Link>
            <Link to="" className="text-gray-600 hover:text-primary-500">
              Blog
            </Link>
            {/* <Link to="/contact.html" className="text-gray-600 hover:text-primary-500">Contact Us</Link> */}

            {user?.email ? (
              <span
                onClick={logout}
                className="gradient-bg text-white px-6 py-2 cursor-pointer rounded-full font-medium hover:opacity-90 transition-all hover:shadow-lg hover:scale-105"
              >
                <span>Log Out</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 w-10 h-10 relative focus:outline-none"
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden  inset-x-0 top-[72px] bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            <nav className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                <Link
                  to="http://leadcourt.com/"
                  className="px-4 py-2 text-gray-600 hover:text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to=""
                  className="px-4 py-2 text-gray-600 hover:text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Blog
                </Link>

                {user?.email || accessToken ? (
                  <span
                    onClick={logout}
                    className="w-full gradient-bg text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Log Out</span>
                    <i className="fas fa-arrow-right text-sm"></i>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderMain;
