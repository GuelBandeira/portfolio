import React from "react";

const Video = ({ linkVideo }) => {
  return (
    <div className="embed-container mx-auto animate__animated animate__bounceInUp self-center max-w-2xl absolute shadow z-50 rounded-2xl">
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        data-aos="fade-up"
        allowFullScreen
        className=" rounded-2xl border-4 border-indigo-600"
        src={linkVideo}
      ></iframe>
    </div>
  );
};

export default Video;
