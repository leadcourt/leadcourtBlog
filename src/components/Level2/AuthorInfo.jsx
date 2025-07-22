// components/AuthorInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AuthorInfo = ({info}) => {
  return (
    <div className="border-t border-gray-200 p-6">
      <h2 className="text-2xl font-bold mb-4">Author</h2>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col items-center sm:items-start sm:mr-6 mb-4 sm:mb-0">
          <img src="/images/avatar_user.webp" alt="" className="w-20 h-20 rounded-full mb-2" />
          <Link to="#" className="text-blue-600 hover:underline">{info[0]}</Link>
        </div>
        <div>
          <h6 className="text-sm text-gray-500 mb-2">22 feb,2018</h6>
          <p className="text-gray-600">
            This incident opened my eyes to the value of Insurance in general, so I decided to examine my personal and business insurance. Sean from Location Rebel does something we all dream about once in awh
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;  