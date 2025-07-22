import React from 'react';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className="bg-yellow-100 border-t border-b border-yellow-300 py-2">
      <div className="max-w-7xl mx-auto flex items-center px-4 space-x-4 overflow-x-auto text-sm">
        <span className="font-semibold text-yellow-800">Breaking:</span>
        <Link to="#" className="text-yellow-700 hover:underline whitespace-nowrap">
          There are many variations of passages of Lorem Ipsum available
        </Link>
        <Link to="#" className="text-yellow-700 hover:underline whitespace-nowrap">
          Lorem Ipsum is simply dummy text of the printing industry
        </Link>
        <Link to="#" className="text-yellow-700 hover:underline whitespace-nowrap">
          Contrary to popular belief, Lorem Ipsum is not simply random text
        </Link>
      </div>
    </div>
  );
};

export default BreakingNews;
