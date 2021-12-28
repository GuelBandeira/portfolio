import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div
        className="w-full shadow-2xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
        style={{ backgroundColor: "#191919" }}
      >
        {children}
      </div>
    </>
  );
};

export default Card;