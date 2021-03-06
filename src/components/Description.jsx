import React from "react";

const Description = () => {
  return (
    <>
      <p
        data-aos="fade-right"
        data-aos-duration="2500"
        data-aos-anchor-placement="left-left"
        className="relative text-2xl lg:text-4xl justify-center dark:text-black text-white text-start mt-2"
      >
        Me chamo{" "}
        <span className=" text-transparent transition ease-in-out duration-300 bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-600">
          Guel
        </span>
        . Sou um Desenvolvedor/Programador Junior apaixonado por Full Stack.
      </p>
    </>
  );
};

export default Description;
