import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const HelpButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition duration-200">
        <FiMessageCircle className="mr-2" />
        Help
      </button>
    </div>
  );
};

export default HelpButton;
