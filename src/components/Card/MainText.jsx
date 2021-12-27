import React from "react";

const MainText = ({ children }) => {
  return (
    <>
      <p className="text-xl text-white font-bold mb-2 text-center">
        {children}
      </p>
    </>
  );
};

export default MainText;
