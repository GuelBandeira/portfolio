import React from "react";

const SubText = ({ children }) => {
  return (
    <>
      <p
        className="text-base text-white font-normal text-center"
        style={{ fontFamily: "Open Sans" }}
      >
        {children}
      </p>
    </>
  );
};

export default SubText;
