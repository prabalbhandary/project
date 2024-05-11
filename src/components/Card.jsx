import React from "react";
import cards from "./Cards";

const SingleCard = ({ imgSrc, title, description }) => (
  <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition duration-300">
    <img src={imgSrc} className="w-7 h-7 text-gray-500 mb-3 hover:bg-gray-600" alt={title} />
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
      {title}
    </h5>
    <p className="mb-3 font-normal text-gray-500">{description}</p>
  </div>
);

const Card = () => {
  <cards />
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
      {cards.map((card, index) => (
        <div key={index} className="hover:cursor-pointer h-96"> {/* Adjust the height as per your requirement */}
          <SingleCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default Card;
