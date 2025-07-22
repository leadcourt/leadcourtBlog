import React from 'react';

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      <i className="fa fa-angle-double-up"></i>
    </button>
  );
};

export default ScrollTop;
