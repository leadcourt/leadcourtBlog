import React from 'react';

const HeaderTop = () => {
  return (
    <div className="bg-gray-900 text-gray-100 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <ul className="flex space-x-4 mb-2 sm:mb-0">
          <li><a href="index.html" className="hover:text-white">Home</a></li>
          <li><a href="contact.html" className="hover:text-white">Contact Us</a></li>
          <li><a href="about.html" className="hover:text-white">About Us</a></li>
          <li><a href="error.html" className="hover:text-white">Error 404</a></li>
          <li><a href="login.html" className="hover:text-white">Login</a></li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fa fa-vine"></i></a></li>
          <li>
            <a href="#" className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded hover:bg-gray-700">
              <i className="flaticon-shopping-bag"></i> <span>0</span>
            </a>
          </li>
          <li>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">
              Get Free Quote <i className="fa fa-arrow-right ml-1"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
