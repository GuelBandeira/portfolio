import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="hover:shadow-2xl hover:shadow-indigo-600 rounded-xl mr-4 text-lg p-3 mt-2 bg-transparent transform duration-300 ease-in hover:text-white hover:bg-indigo-600  border-2 border-indigo-600 ">
        {children}
      </button>
    </>
  );
};

export default Button;
