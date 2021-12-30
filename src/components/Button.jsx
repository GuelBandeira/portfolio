import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="hover:shadow-2xl text-indigo-600  hover:shadow-indigo-600 bg-transparent rounded-xl text-lg p-3 transform duration-300 ease-in hover:text-white hover:bg-indigo-600  border-2 border-indigo-600 ">
        {children}
      </button>
    </>
  );
};

export default Button;
