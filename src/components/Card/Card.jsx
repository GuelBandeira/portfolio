import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out shadow-indigo-900 w-full shadow-xl rounded-lg p-12 flex flex-col bg-gray-900 justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Card;
