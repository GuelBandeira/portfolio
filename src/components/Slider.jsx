import React from "react";
import Slider from "infinite-react-carousel";
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCplusplus } from "react-icons/si";
import { BrowserView, MobileView } from "react-device-detect";

const settings = {
  autoplay: true,
  centerPadding: 550,
  shift: 80,
  centerMode: true,
  dots: true,
  duration: 100,
  initialSlide: 1,
  overScan: 1,
  slidesToShow: 3,
  wheel: true,
  arrows: false,
};

const settingsMobile = {
  autoplay: true,
  centerMode: true,
  dots: true,
  duration: 100,
  initialSlide: 5,
  overScan: 1,
  slidesToShow: 3,
  wheel: true,
  arrows: false,
};
const Carrousel = () => {
  return (
    <>
      <BrowserView>
        <Slider {...settings} className="grabbable mt-24 text-6xl">
          <div className="text-orange-400">
            <FaHtml5 />
          </div>
          <div className="text-blue-400">
            <FaCss3 />
          </div>
          <div className="text-yellow-400">
            <SiJavascript />
          </div>

          <div className="text-cyan-400">
            <FaReact />
          </div>
          <div className="text-cyan-300">
            <SiTailwindcss />
          </div>
          <div className="text-blue-600">
            <SiCplusplus />
          </div>
          <div className="text-green-400">
            <FaPython />
          </div>
          <div className="text-indigo-400">
            <FaPhp />
          </div>
          <div className="text-red-400">
            <FaGit />
          </div>
        </Slider>
      </BrowserView>
      <MobileView>
        <Slider {...settingsMobile} className="grabbable mt-24 text-6xl">
          <div className="text-orange-400">
            <FaHtml5 />
          </div>
          <div className="text-blue-400">
            <FaCss3 />
          </div>
          <div className="text-yellow-400">
            <SiJavascript />
          </div>

          <div className="text-cyan-400">
            <FaReact />
          </div>
          <div className="text-cyan-300">
            <SiTailwindcss />
          </div>
          <div className="text-blue-600">
            <SiCplusplus />
          </div>
          <div className="text-green-400">
            <FaPython />
          </div>
          <div className="text-indigo-400">
            <FaPhp />
          </div>
          <div className="text-red-400">
            <FaGit />
          </div>
        </Slider>
      </MobileView>
    </>
  );
};

export default Carrousel;

// import React, { Component } from 'react';
// import Slider from 'infinite-react-carousel';

// export default className CustomSlider extends Component {
//   render() {
//     const settings =  {
//       arrowsBlock: false,
//       autoplay: true,
//       dots: true,
//       duration: 100,
//       gutter: 100,
//       initialSlide: true,
//       overScan: 1,
//       slidesToShow: 4,
//       wheel: true
//     };
//     return (
//       <div>
//         <span>CustomSlider</span>
//         <Slider { ...settings }>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//           <div>
//             <h3>10</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
