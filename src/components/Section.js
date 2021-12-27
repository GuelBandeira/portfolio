import React from "react";

import "../Section.css";

const section = ({ flexDirection }) => {
  return (
    <div className="section" style={{ flexDirection: flexDirection }}>
      <div className="left-container">
        <div className="block"></div>
      </div>

      <div className="right-container">
        <div className="container">
          <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default section;
