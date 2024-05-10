import React from 'react';

const Banner = () => {
  return (
    <div className="relative">
      <svg
        className="w-full absolute top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6B21A8"
          d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,101.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64V0H0Z"
        />
      </svg>

      <div className="bg-purple-700 text-white py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl">Didn't find what you're looking for?</h2>
              <p className="mt-2">No problem – we're here to help.</p>
              <p className="mt-4">
                Do it yourself.
                <br />
                No coding needed.
                <br />
                Anyone can use Browse AI to extract or monitor data from any website. We've made it as simple and quick as possible.
              </p>
              <button
                className="mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Sign up and try now. It's free.
              </button>
            </div>
            <div>
              <h2 className="text-2xl">Limited-Time Offer</h2>
              <p className="mt-2">
                Have a specialist set up your web automation.
              </p>
              <p className="mt-4">
                We're offering free setup and onboarding support to all users on Team and Company plans to make sure you have a great experience.
              </p>
              <button
                className="mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="w-full absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6B21A8"
          d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,117.3C672,117,768,107,864,117.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224V320H0Z"
        />
      </svg>
    </div>
  );
};

export default Banner;
