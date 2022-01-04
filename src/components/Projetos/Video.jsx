import React from "react";

const Video = ({ linkVideo }) => {
  return (
    <div className="embed-container mx-auto animate__animated animate__bounceInUp self-center max-w-2xl absolute z-50 shadow-2xl shadow-indigo-900 rounded-2xl">
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=" rounded-2xl border-8 border-indigo-500 "
        src={linkVideo}
      ></iframe>
    </div>
  );
};

export default Video;
