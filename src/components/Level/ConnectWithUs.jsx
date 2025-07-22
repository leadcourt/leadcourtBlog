import React from 'react';
import { Link } from 'react-router-dom';

const ConnectWithUs = () => {
  return (
    <section className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4 px-7 py-2 rounded-full border  hover:bg-white hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out  w-fit m-auto">Connect with us</h2>
        <ul className="flex justify-center space-x-6 text-xl">
          {['google-plus', 'linkedin', 'instagram', 'twitter', 'youtube'].map((platform) => (
            <li key={platform}>
              <Link to="#" className="hover:text-gray-300">
                <i className={`fa fa-${platform}`}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConnectWithUs;
