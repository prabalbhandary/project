import React from 'react';

const Subscribe2 = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-64 w-full">
      <div className="p-6 bg-gray-100 flex flex-col items-center justify-center w-2/3 lg:w-1/2 rounded-lg shadow-xl">
        <p className="mb-4 text-lg text-center text-gray-600">
          Get the latest updates on new features we're adding to Browse AI
        </p>
        <form className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-2/3">
            <label htmlFor="email" className="sr-only">
              What is your email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 rounded-lg border-0 w-full sm:w-auto text-black" // text-black for readability
              placeholder="youremail@company.com"
              aria-label="Email Address"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe2;
