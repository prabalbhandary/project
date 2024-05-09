import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-64 w-full">
      <div className="p-6 bg-gray-100 flex flex-col items-center justify-center w-2/3 rounded-lg shadow-lg">
        <p className="mb-4 text-lg text-center">
          Sign up to be notified when we publish new prebuilt robots:
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="youremail@company.com"
            className="p-2 border border-gray-300 rounded-full w-full sm:w-auto"
            required
          />
          <button
            className="bg-purple-600 text-white p-2 rounded transition duration-300 hover:bg-purple-700"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
