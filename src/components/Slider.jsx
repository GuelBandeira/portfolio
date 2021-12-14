import React from "react";
import Slider from "infinite-react-carousel";

const settings = {
  autoplay: true,
  dots: true,
  duration: 100,
  gutter: 100,
  initialSlide: true,
  overScan: 1,
  slidesToShow: 4,
  wheel: true,
  arrowsBlock: false,
};

const Carrousel = () => {
  return (
    <>
      <div>
        <Slider
          className="grabbable p-6 mt-24 pt-0 lg:pt-0 lg:p-40 lg:pb-4"
          {...settings}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </Slider>
      </div>
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
