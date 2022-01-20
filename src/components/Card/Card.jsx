import React from "react";

const Card = ({ children }) => {
  return (
    <div className="items-center justify-self-center">
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out shadow-indigo-900 max-w-sm md:max-w-xl shadow-xl rounded-lg p-12 flex flex-col bg-gray-900 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Card;
