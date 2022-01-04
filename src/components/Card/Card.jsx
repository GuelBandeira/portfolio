import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="w-full shadow-2xl animate__zoomIn animate__animated rounded-lg sahdow-lg p-12 flex flex-col bg-black justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default Card;
