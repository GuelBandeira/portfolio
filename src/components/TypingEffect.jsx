import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Bom dia.", "Boa tarde.", "Boa noite."],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default TypingEffect;
